---
filename: "architecture-patterns-python"
title: "Learning Architecture Patterns with Python"
date: "2021-06-19"
duration: "12 mins"
tags: ["Reflection", "Book Review", "Python"]
---

It feels like there's a canyon sized gap when learning to code. There's an endless slew of beginner coding resources out there (for instance [Codecademy](https://www.codecademy.com/), [freeCodeCamp](https://www.freecodecamp.org/), or [w3Schools](https://www.w3schools.com/)). And there also many advanced resources focused on highly specific topics. However, it feels like there aren't as many resources that focus on making the jump from being able to hack code together that work to structure more advanced architectural patterns. Especially with higher level languages like Python or Javascript.

For instance, when I was learning [Flask](https://flask.palletsprojects.com/en/2.0.x/), I started by watching [Corey Schafer](https://www.youtube.com/c/Coreyms/featured) YouTube tutorials, and by reading the official Flask documentation. I even read a [textbook](https://flaskbook.com/) on Flask to deepen my understanding.

All three of these resources are nothing short of fantastic. But when it came to working on an actual project and working on my companies Flask codebase, it quickly became clear that the basics taught in these resources don't cover how to write production quality code in Flask.

I use Flask as an example here, but this notion is applicable beyond just Flask or Python. Tutorials don't teach you how to code at the standard most organizations expect.

This has always baffled me. How am I supposed to go from building a basic CRUD app, like every tutorial and documentation shows how to do, to implementing more advanced architectural patterns that I hear others talk about? Things like ports and adapters or the service repository pattern.

I asked a few of the more senior devs at my company, [PartnerStack](https://www.partnerstack.com/), where I should go to learn the fundamentals of these architectural patterns.

Everyone that I asked recommended the book [Clean Code](https://www.oreilly.com/library/view/clean-code-a/9780136083238/) by Robert C. Martin. A 400+ page whopping mammoth of a textbook with code examples written entirely in Java.

I read Clean Code cover to cover, and while I did glean some information from it, a lot of it seemed targeted towards working with Java. And even more annoyingly, a lot of the principles presented as hard and fast rules are in fact extremely controversial.

For instance, the author states:

> The ideal number of arguments for a function is zero. Next comes one, followed closely by two. Three arguments should be avoided wherever possible. More than three arguments requires very special justification -- and then shouldn't be used anyway.

But how can this be correct? Popular Python modules break this rule all the time!

Just look at [Apache Airflow operators](https://airflow.apache.org/docs/apache-airflow/stable/howto/operator/python.html) which commonly have 5+ arguments. Are these functions just poorly designed?

I didn't know the answer to this, so I posted to Stack Overflow to get the thoughts of people smarter than myself on the topic.

Here are some of the responses I received:

> The book suggests that three or more parameters is too many for a function. Seems a bit excessive of a rule. Most of the functions in the code that I work on have many parameters.

> He wrote that for java, not for Python, because he doesn't understand Python.

The consensus seems to be that this rule is just bad. And so if that isn't valid advice, then how am I supposed to discern what is and isn't worth following in this book?

I started looking elsewhere to learn architectural patterns. Eventually, I stumbled onto another book - [Architecture Patterns with Python](https://www.oreilly.com/library/view/architecture-patterns-with/9781492052197/) by Harry Percival and Bob Gregory. Another textbook, albeit slightly smaller, more recent (2019), and targetted towards Python developers. I figured I would give it a chance.

This book was everything that I was hoping <u>Clean Code</u> would be. It covered in depth all of the architectural buzzwords I'd heard thrown around.

This includes:

- Domain modelling (working with services)
- Repository pattern
- The service layer (not to be confused with services)
- Unit of work pattern
- Aggregates and consistency boundaries
- Many chapters on event driven microsystems

I felt like I'd found the Holy Grail of writing quality Python code. I started applying these principles to projects I'd been working on, and things started to click.

There are definitely major tradeoffs with many of these patterns, they take time to set up, but can pay dividends down the road if a project scales.

I'll continue to stick with the simpler view layer, business logic layer, and data layer for most smaller projects. But it feels great having knowledge of these more advanced patterns for use at work and larger projects.