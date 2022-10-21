---
filename: fantasy-basketball
title: Building FantaZscores.com
date: "2022-08-17"
duration: "12 mins"
tags: ["Project", "Python", "React", "Flask"]
---

## Intro

In 2018, I wrote an article on my [analytics website](https://matthewbellanalytics.com/pages/basketball_analytics) about using math and analytics to draft the best possible fantasy basketball team.

I didn't think that anyone would read it at the time, but as it turns out, I get a few emails each year from strangers asking to buy the model. So, I decided to build a website and put the model up for sale.

That website became [FantaZscores.com](https://fantazscores.com).

![FantaZscores homepage](../../static/fantazscores/home.png)

## What the Website Does

I won't go too in depth here because my [other article](https://matthewbellanalytics.com/pages/basketball_analytics) already covers the specifics of the FantaZscores model. But to give a high level overview, FantaZscores pulls in daily NBA stats and provides an interactive analytical model to value NBA players for the purposes of fantasy basketball leagues.

## Building the Website

### Architecture Overview

This part gets pretty technical, if you're non-technical, I'd recommend checking out the other articles on this site, as they aren't geared towards technical readers.

![FantazScores architecture](../../static/fantazscores/architecture.png)

The FantaZscores backend is written in Python's [Flask](https://flask.palletsprojects.com/en/2.2.x/) framework and the frontend is written in [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/) and [MobX](https://mobx.js.org/README.html) for state management.

The database used is [PostGreSQL](https://www.postgresql.org/), which we access using Python's [SQLAlchemy](https://www.sqlalchemy.org/) library, and the daily stat updates are scheduled and run using [Celery](https://docs.celeryq.dev/en/stable/getting-started/introduction.html), an asynchronous task queue.

Authentication is handled using [Auth0](https://auth0.com/) and payments are made through [Stripe](https://stripe.com/en-ca).

In development, I also used [Redis](https://redis.io/) to cache the results of complex calculations that were being served to the front end. When it came to deployment, however, this ended up causing some issues. I wanted to deploy as cheaply as possible, given that I don't expect this website to cover it's own costs. I paid $6/month for a [Digital Ocean](https://www.digitalocean.com/) server with 1gb RAM and 25gb disk storage.

Because Redis stores it's data in memory, this 1gb of RAM would cause issues. I failed to realize that although Redis worked fine locally where I'm working on a 32gb RAM MacBook pro, a 1gb Ubuntu server would not be enough to serve my application while having Redis doing it's thing in the background. Redis would cause itself or the app to crash and restart constantly ([Supervisor](http://supervisord.org/) would restart them) as it would push through the 1gb memory limit given the volume of data that I was storing.

I scrapped Redis as a result and accepted that my server would take slightly longer to return a result rather than pay for the slightly more expensive 2gb server.

### Frontend - Building the Rankings Page

The hardest page to build in FantaZscores was by far the rankings page.

![FantaZscores rankings page](../../static/fantazscores/rankings.png)

This page allows us to view z-score rankings of all NBA players. It is filterable by team, timeframe, and season. We can also recompute value by punting (omitting) categories from the overall ranking calculation. It is also sortable by any column.

Without even adding any programming into the mix, the math alone to calculate these values can get complicated, especially for weighted percentage values (free throws and fields goals).

One of the more challenging parts within this page was deciding where to compute different calculations. For instance, my raw data in PostGres holds every game that every player has played. Because we will always need to average these values by season, we can precompute those raw games into averages using a PostGres View.

However, when calculating the total average across categories for a given player, this value will change depending on which categories we are punting so this cannot be performed in a PostGres View. To avoid making extra server calls, I decided to recompute this value on the frontend whenever a punt button is clicked. Mobx computed values makes this process fairly straightforward.

### Backend Architectural Patterns

The backend of the application follows Domain Driven Design patterns modelled after the [Architecture Patterns with Python](https://www.amazon.ca/Architecture-Patterns-Python-Domain-Driven-Microservices/dp/1492052205) book. When I first started this project, I thought this would be helpful in keeping the project organized. But in retrospect, this was probably overkill. I would skip these patterns in favour of speed to deployment if building another project of similar scale.

Nevertheless, I started out by using the service / repo patterns described in that book. These patterns are designed to decouple my data layer and my service layer and make testing easy using dependency injection.

The application was broken out into modular sections using Flask's blueprints, so typically each blueprint would have it's own service, repo, and data access object (DAO). Service classes would access repo classes which would access the DAO (SQLAlchemy Model classes).

The repo pattern in particular may sound redundant. Why not access the DAO directly from the service, you may be wondering. Well, the repo pattern makes it easy to change the way that we persist and retrieve data throughout our app. Having this pattern means that we only need to make those changes in one place (a given repo method), as opposed to in every endpoint where we access our data.

Additionally, the repo pattern makes it easier to unit test our endpoints. Because we're using the repository pattern, we can then make use of dependency injection when testing our service layer.

Specifically, that would mean injecting a separate <i>mock</i> or <i>fake</i> repository during testing to test our service layer methods. This fake repository would have the same methods as our real repo but would store data in memory rather than accessing our database. This would allow our tests to run without relying on our database connection at all.

### Testing

I'll be honest here, I started out writing unit and integration tests for everything on my backend using [Pytest](https://docs.pytest.org/en/7.1.x/) for module discovery and [Unittest](https://docs.python.org/3/library/unittest.html) to write the tests. But as the project took longer and longer to complete I started skimping on testing. This is the type of thing that I would never do on the job, but for a personal website, where time is limited, sometimes you need to cut some corners for speed.

### Overall

Overall I'm happy with the end result. I think it looks nice, it's functional and it's cheap. I think it could have been a bit quicker to complete though if I'd cut a few more corners such as avoiding all the fancy backend patterns.
