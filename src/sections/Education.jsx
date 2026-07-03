import SectionTitle from "../components/ui/SectionTitle";
import TimelineCard from "../components/ui/TimelineCard";
import { education } from "../data/education";

const Education = () => {
  return (
    <section className="py-24 px-6 lg:px-20">

      <SectionTitle
        title="Education"
        subtitle="My Journey"
      />

      <div id="education" className="relative max-w-5xl mx-auto">

        {/* Vertical Line */}

        <div className="absolute left-4 lg:left-1/2 top-0 h-full w-1 bg-cyan-500/30 rounded-full"></div>

        <div className="space-y-12">

          {education.map((item, index) => (

            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 0 ? "" : "lg:[&>*:first-child]:order-2"
              }`}
            >
              <div className="hidden lg:block"></div>

              <div className="relative">

                <div className="absolute -left-7 lg:left-auto lg:-right-11 top-8 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_20px_cyan]"></div>

                <TimelineCard
                  item={item}
                  index={index}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Education;