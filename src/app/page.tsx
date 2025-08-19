import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Bio } from "@/components/bio";
import { Footer } from "@/components/Footer";
import { Form } from "@/components/form";
//import { Testimonials } from "@/components/Testimonials";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />

      <Benefits imgPos="right" data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      {/* <Testimonials /> */}
      <Bio />
      <Form />
      <Footer />
    </Container>
  );
}
