import {
  frontendTechnologies,
  programmingLanguages
} from "../constants";
import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <div className="flex flex-col gap-16">
      {/* Frontend Technologies */}
      <div>
        <h2 className="text-center text-2xl font-bold mb-8">
          Frontend & Backend Technologies
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {frontendTechnologies.map((technology) => (
            <div key={technology.name} className="w-28 h-28">
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>

      {/* Programming Languages */}
      <div>
        <h2 className="text-center text-2xl font-bold mb-8">
          Programming Languages
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {programmingLanguages.map((technology) => (
            <div key={technology.name} className="w-28 h-28">
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
