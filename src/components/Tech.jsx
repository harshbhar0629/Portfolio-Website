import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{technologies.map((technology) => (
				<div className="flex flex-col items-center ">
					<div
						className="w-28 h-28 peer"
						key={technology.name}>
						<BallCanvas icon={technology.icon} />
					</div>
					<div className="text-[14px] peer-hover:opacity-100 opacity-0 font-semibold">
						{technology.name}
					</div>
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, "");
