---
filename: "architecture-patterns-python"
title: "Learning Architecture Patterns with Python"
date: "2021-06-19"
duration: "10 mins"
tags: ["Reflection", "Technical"]
---

It feels like there's a canyon sized gap when learning to code. There's an endless slew of beginner coding resources out there (for instance [Codecademy](https://www.codecademy.com/), [freeCodeCamp](https://www.freecodecamp.org/), or [w3Schools](https://www.w3schools.com/)). And there are equally as many advanced resources focused on highly specific topics like Webpack or parallel programming to name a couple.

There aren't many resources that focus more broadly on improving your coding once you understand the fundamentals though.

For instance, when I was learning [Flask](https://flask.palletsprojects.com/en/2.0.x/), I started by watching [Corey Schafer](https://www.youtube.com/c/Coreyms/featured) YouTube tutorials, and by reading the official Flask documentation. I even read a popular O'Reilly textbook on Flask called [Flask Web Development](https://flaskbook.com/) by Miguel Grinberg to deepen my understanding.

Don't get me wrong, all three of these resources are nothing short of fantastic. But when it came to working on an actual project and working on my companies Flask codebase, it quickly became clear that the basics taught in these resources don't cover how people work with Flask in practice.

I use Flask as an example here, but this notion is applicable beyond the scope of just Flask or Python. Tutorials don't teach you how to code at the standard  most companies expect.

This has always baffled me. Like many of my peers, I've struggled with how to go from building a basic CRUD app, like every tutorial shows how to do, to implementing more advanced architectural patterns that I hear more senior devs talk about. Things like ports and adapters or the service repository pattern.

Where is everyone learning about this stuff? And why do I seem to be the only developer who doesn't know it? Where is the Codecademy class on implementing the unit of work pattern or working in a Domain Driven Design codebase? Should I be admitting these shortcomings in a public blog post? These are the questions that keep me up at night.

It felt like there was a piece of the puzzle missing that I didn't fully understand. I asked a couple of the more senior devs at my company, [PartnerStack](https://www.partnerstack.com/), where I should go to learn the fundamentals of these architectural patterns.

Everyone that I asked recommended the book [Clean Code by Robert C. Martin](https://www.oreilly.com/library/view/clean-code-a/9780136083238/). A 400+ page walloping mammoth of a textbook with code examples written entirely in Java. If this was what I needed to do to learn proper architectural patterns though, then I would do it.

So, I read <u>Clean Code</u> cover to cover, and while I did glean some information from it, a lot of it seemed targeted towards working with Java. And even more annoyingly, a lot of the principles presented as hard and fast rules are in fact extremely controversial.

For instance, the author states:

> The ideal number of arguments for a function is zero. Next comes one, followed closely by two. Three arguments should be avoided wherever possible. More than three arguments requires very special justification -- and then shouldn't be used anyway.

But how can this be correct? Popular Python modules break this rule all the time!

Just look at [Apache Airflow operators](https://airflow.apache.org/docs/apache-airflow/stable/howto/operator/python.html) which commonly have 5+ arguments. Are these functions poorly designed?

I didn't know the answer to this, so I posted to Stack Overflow to get the thoughts of people smarter than myself on the topic.

Here are some of the responses I received:

> My opinion is that the advice you're trying to follow is misguided, or at least not useful for all programming paradigms. For strict OO programming, removing parameters is important; for strict functional programming, there's no way to do anything without parameters. You should use as many parameters as are necessary to do what you need to, and no more than that.

> The book suggests that three or more parameters is too many for a function. Seems a bit excessive of a rule. Most of the functions in the code that I work on have many parameters.

> He wrote that for java, not for Python, because he doesn't understand Python.

The consensus seems to be that this rule is crap. So if this isn't valid advice then how am I supposed to discern what is and isn't worth following in this book?

My conclusion is just that this book is not a worthwhile read for those looking to learn about software architecture for the first time. While there is plenty of good advice, there is also plenty of outdated advice. And for someone looking to learn this stuff it can be hard to separate the good from the bad.

Eventually I stumbled onto another book - [Architecture Patterns with Python](https://www.oreilly.com/library/view/architecture-patterns-with/9781492052197/) by Harry Percival and Bob Gregory. Another textbook, albeit slightly smaller, more recent (2019), and targetted towards Python developers. I figured I would give it a chance.

This book was everything that I was hoping <u>Clean Code</u> would be. It covered in depth all of the architectural buzzwords I'd heard thrown around.

This includes:

- Domain modelling (working with services)
- Repository pattern
- The service layer (not to be confused with services)
- Unit of work pattern
- Aggregates and consistency boundaries
-