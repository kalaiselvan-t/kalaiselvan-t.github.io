---
layout: post
title: Distributed State Estimation Using Kalman-Consensus Filter
image:
    path: /assets/img/blog/IDP.jpg
description: >
  Project for the course Intelligent Distributed Systems at University of Trento
comments: true
---
* Table of Contents
{:toc}

 Distributed systems is the concept of connecting different computing systems together. In robotics, this concept is popularly known as swarm robotics. State estimation is an important process that is used to estimate a state of a system, a robot's position for instance, when we have uncertain sensor measurements. Estimating state of robotic systems that work as a team may be crucial for many tasks. We must have an effective method for any individual robotic system to be aware of its own position and of others at all times. In order to do this, we have to use Distributed State Estimation (DSE) techniques.

## Background
Before jumping to use any DSE techniques, let us first understand some of the limitations of using traditional state estimation techniques for distributed systems. We have to consider two important factors considering distributed nature of the systems. Computation - How are we going to use the sensor measurements to estimate the state of all the system?. Communication - How are we going to communicate the estimated information to all the systems? We have the following choices. 

We can have a centralized system which collects the sensor measurements from all the systems and estimates their state and communicates it back to them. This is the conventional centralized approach. The advantages of this method is the computation is performed by a powerful centralized system and the disadvantage is the communication load the system has to handle when collecting data and sending them back. It grows linearly as the number of robotic systems connected to the network. Otherwise, we could eliminate centralized systems and let the individual systems collect sensor measurements from all other systems and estimate the information for themselves. This method eases up the communication load but in turn increases their computational load.

This is where the distributed systems come in. The idea is to limit the communication of each system to only its neighbours. This reduces the amount of data we need to collect and process and is also easy on the computational load. But is it enough if we only use data from neighbouring systems to estimate the state? Turns out that we get fairly accurate estimations as compared to the centralized estimation techniques. Distributed methods leverage the connected nature of these systems and uses it to have an averaging effect on all the individual estimations. <br>
<br>

![An image comparing the advantages of distributed and decentralized methods](../../assets/img/blog/distributed-comparison.jpg)
Comparison of different estimation methods
{:.figcaption}

## Goal and project setup

Surveillance in facilities having a huge area is very important for maintaining security. Identifying an object of interest and tracking it around the area is a difficult task for many reasons. One reason is that a single sensor doesn't have enough range to cover the entire space of the environement. So, we have to rely on multiple sensors to get the job done. For a successful object tracking application, we may use distributed state estimation techniques, where all the sensors in an environment (say camera) can track objects across with more accuracy. Kalman-consensus filter is a modification of the original kalman filter algorithm to accomodate distributed systems. The goal of this project is to track an object through huge space, using the Kalman-consensus filter. We assume that the environment is sufficiently equipped with multiple sensors for our needs.

We simulate an environment equipped with 12 sensors as shown in the figure below. To make things more interesting, we can divide these sensors into two groups, corner sensors and edge sensors. Let us assume that the corner sensors are more accurate than the edge sensors and have long range. We can also have different mesurement models for the sensors i.e. let us assume that a set of edge sensors may only sense the movement of the target in x-axis and the set its motion in y-axis. Let the corner sensors be able to detect full range of motion of the target. <br>
<br>

{% include image_with_size.html url="../../assets/img/blog/distributed-project-setup.jpg" description="Figure depicting the environment where we are going to track an object" width = "500px"%}

## The algorithm

The Kalman-consensus filter works similar to the conventional Kalman filter. The algorithm consists of 5 steps as seen in the figure


<dl>
    <dt>1. Initialize state estimate variables and their covariance</dt>
    <dd>We start with a random estimate for the state of the object being tracked. We can use the sensor measurements for this.</dd>
    <dt>2. Locally aggregate sensor measurements and the covariance matrices (uncertainities)</dt>
    <dd>We collect the sensor measurements from the neighbouring nodes</dd>
    <dt>3. Calculate an intermediate estimate of the state</dt>
    <dd>We use the aggregated data and the data from the node itself to calculate an intermediate estimate of the state</dd>
    <dt>4. Get consensus on the estimates </dt>
    <dd>We use the epsilon term to choose how much the estimates of the neighbouring nodes affect ours. We can choose this value based on the accuracy of the neighbouring sensors </dd>
    <dt>5. Update and prediction step </dt>
    <dd> We update the current values of the state estimate with the new one and repeat</dd>
</dl>
<br>
{% include image_with_size.html url="../../assets/img/blog/dkf-algorithm.jpg" description="Algorithm of Kalman-Consensus Filter" width="500px"%}

## Results
An elliptical trajectory with random noise is taken as our true trajectory. We would like to investigate the following things

<ol>
  <li>Can the Kalman-consensus filter track the object well in a distributed setting?</li>
  <li>What are the effect of sensors with different accuracy in the network?</li>
  <li>What is the effect of having different measurement models for the two group of sensors?</li>
</ol>

The results of the use of Kalman-consensus filter are shown below. In the first image, we can see the sensor measurements of all 12 sensors and the estimates they came up with. The algorithm is able to track the object well even with high sensor noise. In the second image, all the edge sensors have low accuracy than the corner sensors. The result shows that even with a sensor network having differnt accuracy and robustness the algorithm is able to track the object well. In the final image, we see the estimates of the sensors when the two group of sensors have different measurement models. It can be seen that different measurement models affects the scale of the estimates and also skews them towards a side. The estimates of the corner sensors are better than the others even though its neighbours are negatively contributing in calculating the estimate. The results with different measurement models may improve if the number of sensors in the network increases.

<br>

{% include image.html url="../../assets/img/blog/distributed-result-1.png" description="Sensor measurements and the estimates calculated using the Kalman-consensus filter for all 12 sensors"%}

<br>

{% include image.html url="../../assets/img/blog/distributed-result-2.png" description="Sensor measurements and the estimates for different sensor accuracies" %}

<br>

{% include image.html url="../../assets/img/blog/distributed-result-3.png" description="Sensor measurements and the estimates for different measurement models for corner and edge sensors" %}

You can find the MATLAB code for this project here on [Github](https://github.com/kalaiselvan-t/Kalman-Consensus-Filter)



