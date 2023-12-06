import Button from "@/components/blanding/Button";
import Accordion from "./Accordion";
import { FAQs } from "@/lib/data";

function FAQSection() {
  return (
    <section className="mx-auto flex max-w-md flex-col items-center justify-center gap-4 justify-self-center">
      <h3 className="text-2xl font-semibold">Frequently asked Questions</h3>
      <p className="text-md text-center text-blandingColors-gBlue">
        Here are some of our FAQs. If you have any other questions you&apos;d
        like answered please feel free to email us.
      </p>

      <section className="flex w-full flex-col ">
        {FAQs.map((faq, index) => (
          <Accordion
            key={index}
            header={faq.header}
            body={faq.body}
            className={`border-t border-blandingColors-gBlue py-3 ${
              FAQs.length - 1 === index ? "border-b" : ""
            }`}
          />
        ))}
      </section>

      <Button className="mt-2" variant="info">
        More info
      </Button>
    </section>
  );
}

export default FAQSection;
