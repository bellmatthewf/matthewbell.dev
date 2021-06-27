---
filename: building-pet-scanning-booth
title: Building a 3D Scanning Booth
date: "2021-06-21"
duration: "10 mins"
tags: ["Project", "Python", "3D Printing"]
---

## The Idea

A few years ago, I stumbled across a [company](https://studios.sculptraits3d.com/3d-selfie-toronto/) that would scan people or pets and then 3D print them as a full color figurine. I thought this was a cool business, but they only had one store in Toronto. I started to wonder how they would be able to scale that business model. How many people are willing to travel to that one store to get themselves scanned and printed? I couldn't help but wonder - wouldn't the idea work better if you distributed the 3D scanners to other stores. Then the scanners could send back the necessary files to a central location for printing and you could mail the end consumer their figurine directly.

## The Problem with My Idea

As I researched it more, I realized that the reason that hasn't been done before is because of scanning limitations. You see, there are plenty of cheap and portable [3D scanners](https://www.google.com/search?q=3d+scanner&tbm=isch&ved=2ahUKEwi1k_Gepq_xAhWhoK0KHdl5Ay4Q2-cCegQIABAA&oq=3d+scanner&gs_lcp=CgNpbWcQAzIECAAQQzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoFCAAQsQNQ_IcBWPOPAWDRkAFoAHAAeACAAVyIAf8FkgECMTCYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=D_jTYPXPJaHBtgXZ843wAg&bih=914&biw=1680&rlz=1C5GCEM_enCA914CA914) you can buy off the shelf, but they won't work for this use case.

3D scanners typically need to be moved around all angles of an object while they produce a scan. This takes time and won't work for scans of objects that can't stay still - like people or pets.

To scan a person or a pet, we need to use another technique called _photogrammetry_. In this technique, we take photos from all angles simultaneously using many cameras. We then use software to stitch these photos together into a 3D model for printing.

The problem with photogrammetry booths, is that they are [absolutely massive](https://www.google.com/search?q=photogrammetry+booth&rlz=1C5GCEM_enCA914CA914&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjLg4Gepq_xAhXYbc0KHQhKD3sQ_AUoAXoECAEQAw&biw=1680&bih=914) and cost well over $5,000 to build. Stores likely wouldn't even have room to house something that big.

I needed to find a way to build it smaller. So, I came up with the idea of designing a scanner for cats. It would be a fraction of the size and cost. Then I could give the scanner to pet stores, pet hotels, vets, etc. They can do the scans and it would send back to me for printing.

Sounds reasonable enough, I figured I could build a prototype.

## Building the scanner

This was around the time that I realized I had no idea how to build a prototype.


 one of these things outside of the Software that would be needed, so I took a course on electrical engineering and computer networking to be able to wire up 36 cameras on a subnet. This was the minimum number of cameras I thought I could get away with while still producing a quality scan. There would be 36 cameras which connect to 1 powerful Raspberry Pi with a mounted touchscreen for the end user.

Usually these scanners are built with high quality cameras, but this is also why they cost as much as they do. For my prototype I decided to use Raspberry Pi Zero cameras and computers (only ~$10 each).

I then 3D modelled and printed holsters for the Pi computers and cameras so that I could mount them and angle the cameras correctly. I then mounted 3 cameras apiece onto 12 wooden beams.

I also wired in ethernet adapters to the Pis. With 37 total computers in such a confined space and such extreme accuracy requirements (all cameras must fire at the same time), WiFi would not be an option.

Below we can see the initial stages of the build

![Building the photogrammetry booth shot 1](../../static/building-pet-scanning-booth/build_1.jpg)

The 3D printing and mounting was the easy part. The hard part would be wiring these cameras up. I needed to be able to plug the whole machine into wall a have power sent to all 37 machines

![Building the photogrammetry booth shot 2](../../static/building-pet-scanning-booth/build_2.jpg)
![Building the photogrammetry booth shot 3](../../static/building-pet-scanning-booth/build_3.jpg)

![Photogrammetry booth welcome screen](../../static/building-pet-scanning-booth/welcome_screen.jpg)

<!-- blank line -->

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/Y8BXqzo4hgs" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

<!-- blank line -->

![Review photos](../../static/building-pet-scanning-booth/review_photos.png)

![Testing booth on Tilly (my cat)](../../static/building-pet-scanning-booth/tilly.jpg)

![Testing booth on a drill](../../static/building-pet-scanning-booth/drill.jpg)

![Drill cad file result](../../static/building-pet-scanning-booth/result.jpg)



<b>The Planning Process</b>


<b>The Build</b>




I'd been doing a lot of 3D modelling and printing at the time and figured I could do that too.


I'd been spending a lot of time in the depths of 3D modelling softwares, working on custom fit 3D printed sleep apnea masks. The idea failed because of the complexities of the medical space and the intricacies required to produce it at scale (3D printing scales poorly). I thought there must be simpler applications for 3D printing that I can put my mind to.

What about 3D printing miniature figurines of peoople's pets?