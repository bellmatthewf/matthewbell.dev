---
filename: building-pet-scanning-booth
title: Building a 3D Scanning Booth
date: "2021-06-21"
duration: "12 mins"
tags: ["Project", "Python", "3D Printing"]
---
## TLDR:

Built a big scanning booth. Pics below.

<!-- blank line -->

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/Y8BXqzo4hgs" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

<!-- blank line -->

<br>

## The Idea

A few years ago, I stumbled across a [company](https://studios.sculptraits3d.com/3d-selfie-toronto/) that would scan people or pets and then 3D print them as full color figurines. I thought this was a cool business, but they only had one store in Toronto. I started to wonder how they would be able to scale that business model. How many people are willing to travel to that one store to get themselves scanned and printed? I couldn't help but wonder - wouldn't the idea work better if you distributed the 3D scanners to stores. Then the scanners could send back their files to a central location for printing and you could mail the end consumer their figurine directly.

## The Challenges with My Idea

As I researched it more, I realized that the reason this hasn't been done is because of scanning limitations. You see, there are plenty of cheap and portable [3D scanners](https://www.google.com/search?q=3d+scanner&tbm=isch&ved=2ahUKEwi1k_Gepq_xAhWhoK0KHdl5Ay4Q2-cCegQIABAA&oq=3d+scanner&gs_lcp=CgNpbWcQAzIECAAQQzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoFCAAQsQNQ_IcBWPOPAWDRkAFoAHAAeACAAVyIAf8FkgECMTCYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=D_jTYPXPJaHBtgXZ843wAg&bih=914&biw=1680&rlz=1C5GCEM_enCA914CA914) you can buy off the shelf, but they won't work for this use case.

3D scanners typically need to be moved around all angles of an object while they produce a scan. This takes time and won't work for objects that can't stay still - like people or pets.

To scan a person or a pet, we need to use another technique called _photogrammetry_. In this technique, we take photos from all angles simultaneously using many cameras. We then use software to stitch these photos together into a 3D model for printing.

The problem with photogrammetry booths, is that they are [absolutely massive](https://www.google.com/search?q=photogrammetry+booth&rlz=1C5GCEM_enCA914CA914&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjLg4Gepq_xAhXYbc0KHQhKD3sQ_AUoAXoECAEQAw&biw=1680&bih=914) and cost well over $5,000 to build. Stores likely wouldn't even have room to house something that big.

I needed to find a way to build it smaller. So, I came up with the idea of designing a scanner for cats. It would be a fraction of the size and cost. Then I could give the scanner to pet stores, pet hotels, vets, etc. They can do the scans and it would send back to me for printing.

Sounds reasonable enough, I figured I could build a prototype.

## Building the scanner

Usually these scanners are built with high quality cameras, but this is also why they cost as much as they do. For my prototype, I decided to use 36 [Raspberry Pi Zero](https://thepihut.com/products/raspberry-pi-zero?src=raspberrypi) cameras and computers (only ~$5 each). This was the minimum number of cameras I thought I could get away with while still producing a quality scan. These 36 cameras would connect to one main Raspberry Pi computer with a mounted touchscreen for the end user.

I then 3D printed holsters so that I could mount and angle the cameras. I mounted 3 cameras each onto 12 wooden beams.

With 37 total computers in such a confined space, the computers would need to be connected over Ethernet (not WiFi) using a subnet (their own isolated internet network).

Below we can see an initial stage of the build!

![Building the photogrammetry booth shot 1](../../static/building-pet-scanning-booth/build_1.jpg)

I then took those beams and mounted them on a large wooden hexagon that I had CNC'd. I also mounted the main touch screen computer on top.

![Building the photogrammetry booth shot 2](../../static/building-pet-scanning-booth/build_2.jpg)

The 3D printing and mounting was the easy part though. The hard part would be wiring these cameras up. I needed to be able to plug the whole machine into a wall and have power sent to all 37 machines. Not to mention connect them all via Ethernet.

This is where things got really messy.

In the image below you can see the AC/DC converter I used to plug into the wall (the big silver box) and the terminal blocks I used to distribute power across the computers. Not exactly the safest way to do it, but it would get the job done for a prototype.

You can also see the switches I wired up to connect the 36 server computers to our one client.


![Building the photogrammetry booth shot 3](../../static/building-pet-scanning-booth/build_3.jpg)


I should probably mention at this point, that while I was building this I also wrote Python scripts for the software component. The code can be seen in this [Github repo](https://github.com/bellmatthewf/pet-prints).

The software made use of UDP sockets for triggering the cameras simultaneously and then switched to TCP sockets for remitting the photos back to the main computer.

The user interface was written using Python's Tkinter library. The user could interact with it via the touchscreen the main computer.

The UI would boot on power-up and would let the user take photos and review them for quality before uploading them to remote storage. On upload they would be sent to dropbox where I could then use a 3rd party software to stitch them together. I wish I could say I wrote that part myself, but I didn't.

And voila - we have power!

![Photogrammetry booth welcome screen](../../static/building-pet-scanning-booth/welcome_screen.jpg)


And the review photos screen! The left and right buttons let you scroll through the photos before upload.

![Review photos](../../static/building-pet-scanning-booth/review_photos.png)

Ok now for the real test. I went to get my cat, Tilly to put her in booth. She had already checked it out many times before, so I don't think she minded.

![Testing booth on Tilly (my cat)](../../static/building-pet-scanning-booth/tilly.jpg)

And this is when I realized this wasn't going to work. The cameras weren't a wide enough angle to capture enough of Tilly and I couldn't easily adjust the spacing. More importantly though, I thought I could keep Tilly still and centered by shining a laser pointer in the center of the machine, but it just wasn't reliable enough. I ended up holding her instead, which nullifies the entire scan.

I still wanted to see if it could in theory work with an inanimate object however, so I tried with a small power drill.

This time I felt that I got pretty good coverage of the whole object.

![Testing booth on a drill](../../static/building-pet-scanning-booth/drill.jpg)

I then used a free photogrammetry stitching software to stitch the images together into what I hoped would be a nice 3D model.

The results were... Lackluster.

![Drill cad file result](../../static/building-pet-scanning-booth/result.jpg)

Well, the idea didn't work in its current state. The quality of the 3D model was completely unprintable. Why didn't it work with the drill?

I believe there are three reasons:
- 36 was not enough cameras. Most booths normally have at least 75 (although that is normally for scanning people which are much larger)
- The quality of the photos was too low. Booths normally use high quality cameras, not Raspberry Pi Zero cams.
- The backdrop is also normally completely white, which acts as a green screen. Because my backdrop was not a solid colour, it made it harder for the stitching software to detect the object inside. We can see that happening in the image above where the ground by the drill is included in the model.<br><br>


At this point I'd spend months on this project and decided to call it a wash for now. Maybe I'll come back to it at some point in the future but for now I'm going to leave it at that.