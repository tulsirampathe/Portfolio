/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import axios from "axios";

function DSA() {
  const [totalQuestionStats, setTotalQuestionStats] = useState(0);
  const [totalActiveDays, setTotalActiveDays] = useState(0);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [data, setData] = useState(null);

  const allCalculatePlatformStats = () => {
    if (!data || !data.platformProfiles) {
      console.error("Data is not yet available.");
      return;
    }

    setSelectedPlatform("");

    const platformProfiles = data.platformProfiles.platformProfiles;

    let totalQuestions = 0;

    const setOfActiveDays = new Set();

    for (const profile of platformProfiles) {
      totalQuestions += profile.totalQuestionStats.totalQuestionCounts;

      const submissionObj =
        profile.dailyActivityStatsResponse.submissionCalendar;

      // Add each key from submissionObj to the Set
      Object.keys(submissionObj).forEach((day) => setOfActiveDays.add(day));
    }
    
    // Update state with calculated values
    setTotalQuestionStats(totalQuestions);
    setTotalActiveDays(setOfActiveDays.size);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api.codolio.com/profile?userKey=tulsirampathe"
        );

        // Set data to state
        setData(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // useEffect to trigger calculation after data is set
  useEffect(() => {
    if (data) {
      allCalculatePlatformStats();
    }
  }, [data]);

  const calculatePlatformStats = (platformName) => {
    if (!data || !data.platformProfiles) {
      console.error("Data is not yet available.");
      return;
    }

    setSelectedPlatform(platformName);

    const profile = data.platformProfiles.platformProfiles.find(
      (pt) => pt.platform === platformName
    );

    if (!profile) {
      console.error(`Platform ${platformName} not found.`);
      return;
    }

    // Calculate total questions and active days for the specified platform
    const totalQuestions = profile.totalQuestionStats.totalQuestionCounts;
    const submissionObj = profile.dailyActivityStatsResponse.submissionCalendar;
    const totalDaysActive = Object.keys(submissionObj).length;

    // Update state with calculated values
    setTotalQuestionStats(totalQuestions);
    setTotalActiveDays(totalDaysActive);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Problem-Solving.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px]"
        >
          This section highlights my journey in coding challenges. It includes
          the number of problems I’ve solved, days active, and my engagement
          with leading coding platforms, showcasing my dedication to solving
          complex problems and continuous learning.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-10">
        <Tilt className="xs:w-[250px] w-full">
          <motion.div
            variants={fadeIn("right", "spring", 0, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div className="bg-tertiary rounded-[20px] py-5 px-15 min-h-[150px] flex justify-center items-center flex-col  duration-300">
              <p
                className="sm:text-[18px] text-[14px] text-secondary tracking-wider cursor-pointer "
                onClick={() => allCalculatePlatformStats()}
              >
                Problem Solving Stats
              </p>
              <ul role="list" className="flex mt-2 gap-2 flex-col w-full p-2">
                <li
                  className={`flex flex-col rounded-lg w-full ${
                    selectedPlatform == "codestudio" ? "bg-gray-600" : ""
                  } hover:bg-gray-700 cursor-pointer`}
                >
                  <div className="flex items-center justify-between w-full px-2 py-2">
                    <button
                      className="items-center w-full group flex gap-x-2 round-border text-[13px] font-[450]"
                      onClick={() => calculatePlatformStats("codestudio")}
                    >
                      <img
                        alt="codestudio"
                        loading="lazy"
                        width="24"
                        height="24"
                        decoding="async"
                        src="https://codolio.com/icons/codestudio_dark.png"
                        style={{ color: "transparent" }}
                      />
                      <div className="flex flex-col items-start">
                        <span className="font-semibold tracking-wide">
                          CodeStudio
                        </span>
                      </div>
                    </button>
                    <a
                      target="_blank"
                      className="text-gray-400 group relative hover:text-blue-500"
                      href="https://www.naukri.com/code360/profile/TulsiramPathe"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z" />
                      </svg>
                      <div className="absolute z-[100] hidden group-hover:flex gap-2 px-2 py-1 text-xs text-white bg-gray-900 rounded border shadow-md top-8">
                        <span>Visit Profile</span>
                      </div>
                    </a>
                  </div>
                </li>

                <li
                  className={`flex flex-col rounded-lg w-full ${
                    selectedPlatform == "geeksforgeeks" ? "bg-gray-600" : ""
                  } hover:bg-gray-700 cursor-pointer`}
                >
                  <div className="flex items-center justify-between w-full px-2 py-2">
                    <button
                      className="items-center w-full group flex gap-x-2 round-border text-[13px] font-[450]"
                      onClick={() => calculatePlatformStats("geeksforgeeks")}
                    >
                      <img
                        alt="geeksforgeeks"
                        loading="lazy"
                        width="24"
                        height="24"
                        decoding="async"
                        src="https://codolio.com/icons/gfg.png"
                        style={{ color: "transparent" }}
                      />
                      <div className="flex flex-col items-start">
                        <span className="font-semibold tracking-wide">
                          GeeksForGeeks
                        </span>
                      </div>
                    </button>
                    <a
                      target="_blank"
                      className="text-gray-400 group relative hover:text-blue-500"
                      href="https://www.geeksforgeeks.org/user/tulsiramdaw7/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z" />
                      </svg>
                      <div className="absolute z-[100] hidden group-hover:flex gap-2 px-2 py-1 text-xs text-white bg-gray-900 rounded border shadow-md top-8">
                        <span>Visit Profile</span>
                      </div>
                    </a>
                  </div>
                </li>

                <li
                  className={`flex flex-col rounded-lg w-full ${
                    selectedPlatform == "leetcode" ? "bg-gray-600" : ""
                  } hover:bg-gray-700 cursor-pointer`}
                >
                  <div className="flex items-center justify-between w-full px-2 py-2">
                    <button
                      className="items-center w-full group flex gap-x-2 round-border text-[13px] font-[450]"
                      onClick={() => calculatePlatformStats("leetcode")}
                    >
                      <img
                        alt="leetcode"
                        loading="lazy"
                        width="24"
                        height="24"
                        decoding="async"
                        src="https://codolio.com/icons/leetcode_dark.png"
                        style={{ color: "transparent" }}
                      />
                      <div className="flex flex-col items-start">
                        <span className="font-semibold tracking-wide">
                          LeetCode
                        </span>
                      </div>
                    </button>
                    <a
                      target="_blank"
                      className="text-gray-400 group relative hover:text-blue-500"
                      href="https://leetcode.com/u/Tulsiram_pathe1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z" />
                      </svg>
                      <div className="absolute z-[100] hidden group-hover:flex gap-2 px-2 py-1 text-xs text-white bg-gray-900 rounded border shadow-md top-8">
                        <span>Visit Profile</span>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </Tilt>

        {[
          { title: "Total Questions", value: totalQuestionStats },
          { title: "Total Active Days", value: totalActiveDays },
        ].map((item, index) => (
          <Tilt key={index} className="xs:w-[250px] w-full">
            <motion.div
              variants={fadeIn("right", "spring", index + 1 * 0.5, 0.75)}
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
              <div className="bg-tertiary rounded-[20px] py-5 px-15 min-h-[225px] flex justify-center items-center flex-col duration-300">
                <p className="sm:text-[18px] text-[14px] text-secondary tracking-wider">
                  {item.title}
                </p>
                <h1 className={styles.sectionHeadText}>{item.value}</h1>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(DSA, "DSA");
