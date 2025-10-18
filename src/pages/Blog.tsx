import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="bg-background-light font-display text-text-light blog-theme">
      {/* Font mappings + material icons tuning to mirror original */}
      <style>{`
        .font-display { font-family: 'Work Sans', sans-serif; }
        .font-body { font-family: 'Merriweather', serif; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
      `}</style>

      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <main className="flex-1 px-6 md:px-10 lg:px-20 py-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-text-light text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                  The Shipboard Worker's Log
                </h1>
                <p className="mt-4 text-lg text-text-light/80 max-w-2xl mx-auto font-body">
                  Your guide to mastering remote work from sea. Find tips, destination guides, and stories from fellow digital nomads on the waves.
                </p>
              </div>

              <div className="sticky top-[65px] z-10 bg-background-light/80 backdrop-blur-sm py-4 mb-8">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="w-full md:w-2/3">
                    <label className="flex flex-col min-w-40 h-12 w-full">
                      <div className="flex w-full flex-1 items-stretch rounded-lg h-full shadow-sm">
                        <div className="text-text-light/60 flex border-y border-l border-subtle-light bg-white items-center justify-center pl-4 rounded-l-lg">
                          <span className="material-symbols-outlined">search</span>
                        </div>
                        <input
                          className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-text-light focus:outline-0 focus:ring-2 focus:ring-primary/50 border-y border-r border-subtle-light bg-white h-full placeholder:text-text-light/60 px-4 text-base font-normal font-body leading-normal"
                          placeholder="Search for articles..."
                          defaultValue=""
                        />
                      </div>
                    </label>
                  </div>

                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="flex-1">
                      <div className="flex h-12 w-full items-center justify-center rounded-lg bg-white p-1 shadow-sm border border-subtle-light">
                        <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-primary has-[:checked]:text-white text-text-light text-sm font-medium leading-normal transition-colors">
                          <span className="material-symbols-outlined mr-2">list</span>
                          <span className="truncate hidden sm:inline">List View</span>
                          <input className="invisible w-0" name="view-toggle" type="radio" value="List View" defaultChecked />
                        </label>
                        <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-primary has-[:checked]:text-white text-text-light text-sm font-medium leading-normal transition-colors">
                          <span className="material-symbols-outlined mr-2">grid_view</span>
                          <span className="truncate hidden sm:inline">Grid View</span>
                          <input className="invisible w-0" name="view-toggle" type="radio" value="Grid View" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 p-3 flex-wrap mt-4 -mx-3">
                  <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-4 text-white text-sm font-medium">All</button>
                  <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border-subtle-light px-4 text-text-light text-sm font-medium hover:bg-primary/20 transition-colors">Cruise Life</button>
                  <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border-subtle-light px-4 text-text-light text-sm font-medium hover:bg-primary/20 transition-colors">Destinations</button>
                  <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border-subtle-light px-4 text-text-light text-sm font-medium hover:bg-primary/20 transition-colors">Remote Work</button>
                  <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border-subtle-light px-4 text-text-light text-sm font-medium hover:bg-primary/20 transition-colors">Packing Tips</button>
                  <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border-subtle-light px-4 text-text-light text-sm font-medium hover:bg-primary/20 transition-colors">Internet</button>
                  <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border-subtle-light px-4 text-text-light text-sm font-medium hover:bg-primary/20 transition-colors">Excursions</button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {/* Blog Post Card: List View */}
                <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-subtle-light">
                  <img
                    className="w-full md:w-1/3 h-48 md:h-auto object-cover rounded-lg"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuASg3x8FzpJfuO5la36KSDK2py232TgSvRn95lc-M4WtQXRxfwzbF8yrH4carwQ9mb45-_QQ3_IcoIUeqxT-rkcGLtaLmyvrC5T_3lAyOC6rGaJdUGSvsuzM87ZsLT4V58KCVnUxUGfN3B8MU7F9Vvx5IXmgA1WvgBmS-D8k1wtsfO1gTdXffYJqgavThPB-C-2KEa6lsh40p7n5U1PgsStaj2e4ANuoSRvmdYBixHAxOvEZWC5SEdDQiV9FEmkh5Sfts4e5lN3cGY4"
                    alt="A calm turquoise sea with a cruise ship in the distance"
                  />
                  <div className="flex flex-col flex-1 justify-center">
                    <p className="text-primary text-sm font-bold mb-2">CRUISE LIFE</p>
                    <h3 className="text-2xl font-bold text-text-light mb-3">The Ultimate Guide to Staying Productive on a Cruise Ship</h3>
                    <p className="font-body text-text-light/80 mb-4">
                      Working from a cruise ship is a dream for many. Here's how to make it a productive reality, from finding the best Wi-Fi spots to creating a work-life balance at sea.
                    </p>
                    <div className="flex items-center text-sm text-text-light/60 font-body">
                      <span>By Jane Doe</span>
                      <span className="mx-2">•</span>
                      <span>October 26, 2023</span>
                    </div>
                  </div>
                </div>

                {/* Blog Post Card: List View */}
                <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-subtle-light">
                  <img
                    className="w-full md:w-1/3 h-48 md:h-auto object-cover rounded-lg"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbpGheAFnjlNrAv7iLeAhRcAuLeWKewB45f39gZmENXDi4v7FsNWeXI4kKSGtX16C5xWHxc0g_z8kA2MGvRq3YQGwas2d3rsu8LiyycIsQl_eSPaBT_adXRwJtFyVP4T-EAbJiW04IPGr-deYyxSG2UjL0tzWhAjUOA5r4OjBXQHtrFjc7hjl2AtajZozOnSf-UJ8LoAyTpOIswns8GFJuqZe3ser67VyIUv9IaaaBpFmBdXiqhstByATzT-izYOrm11omVMNdZz13"
                    alt="A vibrant Caribbean port with colorful buildings and clear water"
                  />
                  <div className="flex flex-col flex-1 justify-center">
                    <p className="text-primary text-sm font-bold mb-2">DESTINATIONS</p>
                    <h3 className="text-2xl font-bold text-text-light mb-3">Top 5 Caribbean Ports for Digital Nomads</h3>
                    <p className="font-body text-text-light/80 mb-4">
                      Not all ports are created equal for the remote worker. We've ranked the best Caribbean stops based on connectivity, co-working spaces, and adventure opportunities.
                    </p>
                    <div className="flex items-center text-sm text-text-light/60 font-body">
                      <span>By John Smith</span>
                      <span className="mx-2">•</span>
                      <span>October 15, 2023</span>
                    </div>
                  </div>
                </div>

                {/* Blog Post Card: List View */}
                <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-subtle-light">
                  <img
                    className="w-full md:w-1/3 h-48 md:h-auto object-cover rounded-lg"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoMsqxebkyv2C2orD2al_bMhUb9j6j2upB_K74VQ6yt0iJtO-lNKyTP8pARZXeUbFP0BDJ_6W3eAXhDSI6DcCSw3lzd6NBKC1omIrEUd2U5_h6ISTcnntuJ8ZrQoOa4INjnUpU15IKySNM8nbj_rXKtote53GjuqFHpxJfw_KQXtAbBdZyfWAX0DvLFih55_IymFXptsr6I2naThd27HX69nTRW7tplae-1Axev3MF74AQjPoK89_5mYtZvFmn8Y4bwQQ4AYX-1Drd"
                    alt="A minimalist packing setup with a laptop, passport, and essentials in a suitcase"
                  />
                  <div className="flex flex-col flex-1 justify-center">
                    <p className="text-primary text-sm font-bold mb-2">PACKING TIPS</p>
                    <h3 className="text-2xl font-bold text-text-light mb-3">
                      Packing Light for a Long-Term Cruise: The Remote Worker's Edition
                    </h3>
                    <p className="font-body text-text-light/80 mb-4">
                      Forget overpacking. This guide focuses on the essential tech and versatile clothing you'll need for months of productive and stylish life at sea.
                    </p>
                    <div className="flex items-center text-sm text-text-light/60 font-body">
                      <span>By Emily White</span>
                      <span className="mx-2">•</span>
                      <span>September 28, 2023</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <button className="min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
                  <span className="truncate">Load More</span>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Blog;