import React, { useRef } from "react";
import lang from "./utils/languageConstants";
import { useSelector } from "react-redux";
import openAi from "./utils/openAi";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    //Form a query for gpt api to understand properly.
    const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query ${searchText.current.value}. Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Godzilla, Sholay, Don, Avengers, How to train your Dragon`;

    // Make an API Call to GPT API and get Movie Results
    const gptResults = await openAi.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      //TO DO: Error Handling
    }

    console.log(gptResults.choices?.[0]?.message?.content);
    const gptMovieList = gptResults.choices?.[0]?.message?.content.split(",");

    
  };

  return (
    <div className="pt-[15%] flex justify-center">
      <form
        className="bg-gray-800 w-1/2 grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[language].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
        ></input>
        <button
          className="py-2 px-4 bg-red-700 rounded-lg text-white col-span-3 m-4"
          onClick={handleGptSearchClick}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
