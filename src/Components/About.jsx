import React from "react";
import Navbar from './Navbar'

const Faq = () => {

  return (
    <div className="bg-gradient-to-b from-[#F8F4E1] to-[#ecd79f] text-[#543310] min-h-screen">
      <Navbar/>
      <section class="">
    <div class="py-12 bg-">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div class="lg:text-center">
                <h2
                    class="font-heading mb-4 bg-[#af8f6f]  px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                    Why choose us?
                </h2>
                <p class="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Sustainable Development: A Holistic Approach to Health
                </p>
                <p class="mt-4 max-w-2xl text-lg text-gray-700 lg:mx-auto">
                Sustainable development is a comprehensive framework that seeks to balance economic growth, environmental stewardship, and social well-being. Within this framework, health plays a crucial role, as it directly impacts and is influenced by sustainable development practices. Our project focuses on four key aspects of health: physical health, mental health, social health, and psychological health.
                </p>
            </div>

            <div class="mt-10">
                <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <div class="relative">
                        <dt>
                            <div
                                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/28524/muscle-flex-outline.svg" />
                            </div>
                            <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Physical Health</p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-gray-500">
                        Physical health is fundamental to overall well-being and quality of life. It encompasses the proper functioning of the body, the prevention and management of diseases, and the promotion of healthy lifestyles.
                        </dd>
                    </div>
                    <div class="relative">
                        <dt>
                            <div
                                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/482779/brain-illustration-12.svg" />
                            </div>
                            <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Mental Health

                            </p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-gray-500"> Mental health is integral to a person's ability to lead a fulfilling life. It includes emotional, psychological, and social well-being, affecting how individuals think, feel, and act.
                        </dd>
                    </div>
                    <div class="relative">
                        <dt>
                            <div
                                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/521200/people.svg" />

                            </div>
                            <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Social Health
                            </p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-gray-500"> Social health refers to the ability to form satisfying interpersonal relationships and adapt to social situations. It is essential for personal and community well-being.
                        </dd>
                    </div>
                    <div class="relative">
                        <dt>
                            <div
                                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/351945/diagnoses.svg" />

                            </div>
                            <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Psychological Health
                            </p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-gray-500"> Psychological health is closely linked to mental health but focuses more on the cognitive and emotional aspects of well-being. It includes self-esteem, self-acceptance, and the ability to manage emotions effectively.
                        </dd>
                    </div>
                </dl>
            </div>

        </div>
    </div>
</section>
    </div>
  );
};

export default Faq;
