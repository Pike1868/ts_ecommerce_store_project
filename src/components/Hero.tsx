import {Link} from "react-router-dom";
import { Button } from "./ui/button";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section className="grid items-center grid-cols-1 gap-24 lg:grid-cols-2">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          Compile Your Style
        </h1>
        <p className="max-w-xl mt-8 text-lg leading-8">
        Welcome to Syntax Threads, where technology meets fashion in a unique blend of style and substance. Born from a passion for clean code and clever design, our apparel celebrates the humor and innovation of the tech world. Each piece in our collection is crafted to resonate with tech enthusiasts, coders, and anyone who loves a smart play on words.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link to="products">Products</Link>
        </Button>
      </div>
      <HeroCarousel />
      </section>
  )
}