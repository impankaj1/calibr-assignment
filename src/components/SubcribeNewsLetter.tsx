import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const SubscribeNewsLetter = () => {
  return (
    <div className="px-4 py-10 m-4 bg-neutral-200/40 rounded-lg">
      <div className="flex flex-col gap-4">
        <Image
          src={
            "https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/6181d621f90781b24e43f991_email-icon-applay-x-template.svg"
          }
          height={60}
          width={60}
          alt="Email Icon - Techpool X Webflow Template"
          className="rounded-xl"
        />
        <div className="flex flex-col justify-center items-start gap-1 mb-4">
          <h3 className="text-xl font-semibold">Subscribe to our letter</h3>
          <p className="text-lg text-start">
            Lorem ipsum dolor sit amet consecte{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Input placeholder="Enter your email" className="p-8" size={6} />
        <Button className="p-4">Subscribe</Button>
      </div>
    </div>
  );
};

export default SubscribeNewsLetter;
