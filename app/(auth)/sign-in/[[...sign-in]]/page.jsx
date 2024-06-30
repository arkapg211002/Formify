import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="/extras/loginpage.jpeg"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="/">
              <span className="sr-only">Home</span>
              <img
                className="h-10 sm:h-12 hover:h-12 sm:hover:h-14 transition-all duration-300"
                src="/logo.svg"
                alt="Home"
              />
            </a>

            <h1 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl text-shadow-lg">
              Welcome to Formify
            </h1>

            <p className="mt-4 leading-relaxed text-white/90">
              Simplify your data entry with Formify, offering versatile and powerful tools to build forms that fit your unique needs.
            </p>
          </div>
        </section>

        <main
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a className="block text-white" href="/">
                <span className="sr-only">Home</span>
                <img
                  className="h-10 sm:h-12 hover:h-12 sm:hover:h-14 transition-all duration-300"
                  src="/logo.svg"
                  alt="Home"
                />
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Formify
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Simplify your data entry with Formify, offering versatile and powerful tools to build forms that fit your unique needs.
              </p>
            </div>

            <SignIn path="/sign-in" />
          </div>
        </main>
      </div>
    </section>
  );
}
