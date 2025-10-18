import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="w-full">
      <main className="flex-1">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-6xl flex-1">
            <main className="flex-grow px-4 sm:px-6 lg:px-10 py-12 md:py-20">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-text-dark">Get in Touch</h1>
                  <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    We'd love to hear from you. Whether you have a question about our services, a press inquiry, or a partnership proposal, please don't hesitate to reach out.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
                  <div className="md:col-span-3">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <label className="flex flex-col">
                          <p className="text-sm font-medium pb-2 dark:text-slate-300">Name</p>
                          <input 
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-dark focus:outline-none  dark:border-gray-700 bg-background-accent/50 dark:bg-background-dark h-14 placeholder:text-slate-400 px-4 py-3 text-base font-normal transition-colors shadow-sm focus:border-primary focus:shadow-md" 
                            placeholder="Enter your name" 
                            defaultValue=""
                          />
                        </label>
                        <label className="flex flex-col">
                          <p className="text-sm font-medium pb-2 dark:text-slate-300">Email</p>
                          <input 
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-dark focus:outline-none  dark:border-gray-700 bg-background-accent/50 dark:bg-background-dark h-14 placeholder:text-slate-400 px-4 py-3 text-base font-normal transition-colors shadow-sm focus:border-primary focus:shadow-md" 
                            placeholder="Enter your email address" 
                            defaultValue=""
                          />
                        </label>
                      </div>
                      
                      <label className="flex flex-col">
                        <p className="text-sm font-medium pb-2 dark:text-slate-300">Reason for Contact</p>
                        <select 
                          className="form-select appearance-none w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-dark focus:outline-none  dark:border-gray-700 bg-background-accent/50 dark:bg-background-dark h-14 placeholder:text-slate-400 px-4 py-3 text-base font-normal transition-colors bg-no-repeat bg-right shadow-sm focus:border-primary focus:shadow-md" 
                          style={{
                            backgroundImage: "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%2364748b%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e')",
                            backgroundPosition: "right 1rem center",
                            backgroundSize: "1.5em 1.5em"
                          }}
                        >
                          <option>General Inquiry</option>
                          <option>Press</option>
                          <option>Partnerships</option>
                        </select>
                      </label>
                      
                      <label className="flex flex-col">
                        <p className="text-sm font-medium pb-2 dark:text-slate-300">Message</p>
                        <textarea 
                          className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-text-dark focus:outline-none  dark:border-gray-700 bg-background-accent/50 dark:bg-background-dark min-h-[200px] placeholder:text-slate-400 p-4 text-base font-normal transition-colors shadow-sm focus:border-primary focus:shadow-md" 
                          placeholder="Your message here..."
                        />
                      </label>
                      
                      <button 
                        className="flex min-w-[120px] items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide shadow-md hover:bg-blue-700 focus:outline-none focus:ring-offset-2 focus:ring-primary transition-all duration-300 ease-in-out"
                        type="submit"
                      >
                        <span className="truncate">Send Message</span>
                      </button>
                    </form>
                  </div>
                  
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h3 className="text-lg font-bold text-text-dark mb-4">Other Ways to Connect</h3>
                      <div className="space-y-4">
                        <a className="flex items-center gap-3 group" href="mailto:theseasuitelife@gmail.com">
                          <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors">mail</span>
                          <span className="text-slate-500 group-hover:text-primary transition-colors">theseasuitelife@gmail.com</span>
                        </a>
                        <div className="flex items-center gap-4 pt-2">
                          <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="#">
                            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                              <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
                            </svg>
                          </a>
                          <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="#">
                            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                            </svg>
                          </a>
                          <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="#">
                            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                              <path clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12.019c0 4.438 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.745 0 .268.18.58.688.482A10.001 10.001 0 0022 12.019C22 6.477 17.523 2 12 2z" fillRule="evenodd"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-text-dark mb-4">Schedule a Chat</h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-4">Interested in a more in-depth conversation? Book a consultation call with us.</p>
                      <button className="flex min-w-[120px] items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide  dark:border-gray-700 hover:bg-slate-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-offset-2 dark:focus:ring-offset-background-dark transition-colors duration-300 ease-in-out">
                        <span className="truncate">Book a Consultation</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;