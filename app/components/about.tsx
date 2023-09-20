"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);
  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Hello, I&apos;m <span className="font-medium">Nabil Waris</span>, a{" "}
        <span className="font-medium">computer science</span> student with a
        deep <span className="underline">love</span> for
        <span className="font-medium"> coding</span> and a keen{" "}
        <span className="font-medium">problem-solving</span> mindset. My journey
        into the world of
        <span className="font-medium"> software development </span> started a
        few years ago, and I&apos;m currently immersed in the art of{" "}
        <span className="font-medium">front-end development</span>. As I work
        towards becoming a
        <span className="font-medium"> full-stack developer</span>, I find my
        passion in taking on new challenges and diving into projects that push
        my boundaries. One thing I firmly believe in is that the best way to{" "}
        <span className="font-medium">learn</span> and grow as a{" "}
        <span className="font-medium">developer</span> is through
        <span className="font-medium">
          {" "}
          hands-on experience and collaboration
        </span>
        . I&apos;m always eager to connect with
        <span className="font-medium"> like-minded individuals</span>, exchange
        ideas, and collectively create innovative solutions in the ever-evolving
        landscape of software development. Let&apos;s embark on this exciting journey
        together and build remarkable things in the world of technology!
      </p>
      <p>
        <span className="italic">When I&apos;m not coding,</span> I enjoy spending
        time with my family and friends, watching movies, and playing video
        games. I&apos;m a <span className="font-medium">lifelong learner</span>, and
        I&apos;m always looking for new <span className="font-medium">books,</span>{" "}
        <span className="font-medium">tutorials,</span> and{" "}
        <span className="font-medium">courses</span> to help me improve my{" "}
        <span className="font-medium">skills</span> and{" "}
        <span className="font-medium">knowledge.</span> If you&apos;re interested in{" "}
        <span className="font-medium">learning</span> more about my{" "}
        <span className="font-medium">skills</span> and{" "}
        <span className="font-medium">experience,</span> feel free to take a
        look at my <span className="font-medium">CV. </span> I&apos;d{" "}
        <span className="underline">love</span> to hear from you and discuss
        potential opportunities to collaborate on projects or learn from each
        other.
      </p>
    </motion.section>
  );
}
