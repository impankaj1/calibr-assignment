"use client";

import AllTemplateCard from "@/components/AllTemplateCard";
import BuyTemplateButton from "@/components/BuyTemplateButton";
import FigmaIncludedCard from "@/components/FigmaIncludedCard";
import Footer from "@/components/Footer";
import IncludedSection from "@/components/IncludedSection";
import ParallaxImageRows from "@/components/ParallelImages";
import SubscribeNewsLetter from "@/components/SubcribeNewsLetter";
import { Button } from "@/components/ui/button";
import WebflowCard from "@/components/WebflowCard";
import { followOptions } from "@/content/FollowOptions";
import { includedSections } from "@/content/IncludedSections";
import { mainPageSection } from "@/content/MainPageSection";
import { menuOptions } from "@/content/MenuOptions";
import { utilityOptions } from "@/content/UtilityOptions";
import { utilityPageSections } from "@/content/UtilitySection";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { Templates } from "@/content/Templates";
import TemplateCard from "@/components/TemplateCard";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 overflow-x-hidden">
      <ScrollReveal delay={0.1}>
        <div className="py-10">
          <div className="my-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center px-6 my-4 font-bold">
              TechPool X Webflow Template
            </h1>

            <h2 className="text-xl px-6 text-center text-gray-500">
              Presenting Techpool X, the ultimate B2B SaaS & Tech Webflow
              Template.
            </h2>
          </div>

          <div className="flex w-full flex-col justify-center sm:flex-row gap-4 p-4">
            <Button className="p-4 text-xl">
              Buy template{" "}
              <span>
                <ArrowRight />
              </span>
            </Button>
            <Button className="p-4 text-xl font-medium" variant={"outline"}>
              Explore pages
            </Button>
          </div>
        </div>
      </ScrollReveal>

      <div className="w-[100vw]">
        <ParallaxImageRows />
      </div>
      <div className="py-20">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-semibold md:font-bold px-6 text-center ">
            What is included in Techpool X
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-lg text-gray-600 text-center my-5 px-6 md:px-20">
            <span className="font-semibold">Techpool X Webflow </span>Template
            includes over{" "}
            <span className="font-semibold">16 pages in total</span>, with more
            than <span className="font-semibold">50 section.</span>
          </p>
        </ScrollReveal>
        <div className="space-y-6 m-4 md:m-0 md:grid grid-cols-3 gap-6">
          {includedSections.map((section, idx) => {
            return (
              <ScrollReveal key={section.src} delay={0.05 * idx}>
                <IncludedSection
                  imgSrc={section.src}
                  descNumber={section.number}
                  descText={section.text}
                />
              </ScrollReveal>
            );
          })}
        </div>
        <div className="m-4 pb-20 md:m-0">
          <FigmaIncludedCard />
          <BuyTemplateButton />
        </div>
        <div className="bg-neutral-200/40 p-4 md:p-0">
          <div className="flex flex-col pt-20 items-center justify-center gap-6 pb-6 px-6">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-semibold">Main Page</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg md:text-xl text-center text-gray-500">
                Take a look at the main pages included in the Techpool X
                Template
              </p>
            </ScrollReveal>
          </div>
          <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainPageSection.map((section, idx) => {
              return (
                <ScrollReveal key={section.src} delay={0.05 * idx}>
                  <IncludedSection
                    imgSrc={section.src}
                    descText={section.text}
                  />
                </ScrollReveal>
              );
            })}
          </div>
          <div className="mt-6 mb-12">
            <BuyTemplateButton />
          </div>
        </div>
        <div className=" p-4 md:p-0">
          <div className="flex flex-col pt-20 items-center justify-center gap-6 pb-6 px-6">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-semibold">
                Utility Page
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg md:text-xl text-center text-gray-500">
                Take a look at the Utility pages included in the Techpool X
                Template
              </p>
            </ScrollReveal>
          </div>
          <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {utilityPageSections.map((section, idx) => {
              return (
                <ScrollReveal key={section.src} delay={0.05 * idx}>
                  <IncludedSection
                    imgSrc={section.src}
                    descText={section.text}
                  />
                </ScrollReveal>
              );
            })}
          </div>
          <div className="mt-6 mb-12">
            <BuyTemplateButton />
          </div>
        </div>
        <div className="p-4 space-y-10">
          <div className="flex flex-col pt-20 items-center justify-center gap-6 ">
            <ScrollReveal delay={1}>
              <h2 className="text-3xl md:text-5xl font-semibold">
                The Techpool X Webflow Template also comes with more
                surprises...
              </h2>
            </ScrollReveal>
          </div>
          <div className="space-y-6 ">
            {Templates.map((template, idx) => (
              <ScrollReveal key={idx} delay={0.5}>
                <TemplateCard
                  idx={idx}
                  header={template.header}
                  description={template.description}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="m-4 md:m-0 h-full ">
            <ScrollReveal delay={0.2}>
              <WebflowCard />
            </ScrollReveal>
          </div>
          <div className="m-4 md:m-0 ">
            <ScrollReveal delay={0.2}>
              <AllTemplateCard />
            </ScrollReveal>
          </div>
        </div>
        <div className="py-20 mx-4 md:text-xl">
          <div className="space-y-6 my-10">
            <Image
              height={200}
              width={200}
              src={
                "https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/62d80ee516e45986ef20f689_logo-techpool-x-webflow-template.svg"
              }
              alt="Techpool Logo"
            />{" "}
            <p className="text-lg text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doin
              tempor incididunt labore et magna
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="my-10">
              <h2 className="font-bold ">Menu</h2>
              <div className="grid grid-cols-2 my-8  gap-4">
                {menuOptions.map((option) => (
                  <ScrollReveal key={option} delay={0.2}>
                    <p key={option}>{option}</p>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="my-10">
                <h2 className="font-bold ">Utility Page</h2>
                <div className="grid grid-cols-1 my-8 gap-4">
                  {utilityOptions.map((option) => (
                    <ScrollReveal key={option} delay={0.2}>
                      <p key={option}>{option}</p>
                    </ScrollReveal>
                  ))}
                  <a href="/" className=" font-semibold text-primary underline">
                    More Webflow Templates
                  </a>
                </div>
              </div>
              <div className="my-10">
                <h2 className="font-bold ">Follow Us</h2>
                <div className="grid grid-cols-1 my-8 gap-4">
                  {followOptions.map((option) => (
                    <ScrollReveal key={option.label} delay={0.2}>
                      <div key={option.label} className="flex gap-2 my-2">
                        <Button size={"icon"} variant={"secondary"}>
                          {option.icon}
                        </Button>
                        <span>{option.label}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center p-2">
          <SubscribeNewsLetter />
        </div>
        <div className="text-center p-2">
          <Footer />
        </div>
      </div>
    </div>
  );
}
