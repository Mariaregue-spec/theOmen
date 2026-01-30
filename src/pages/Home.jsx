import { Link } from "react-router-dom";
import heroDesktop from "../assets/home/hero-desktop.jpg";
import heroMobile from "../assets/home/hero-mobile.jpg";
import CursedCarousel from "../components/CursedCarousel";

const Home = () => {
    return (
        <main
            className="min-h-screen w-full bg-[#050505] relative overflow-hidden"
            aria-label="THE OMEN — Home"
        >
            <div
                className="absolute inset-0 md:hidden"
                style={{
                    backgroundImage: `url(${heroMobile})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            />

            <div
                className="hidden md:block absolute inset-0"
                style={{
                    backgroundImage: `url(${heroDesktop})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            />

            <div className="absolute inset-0 bg-[#050505]/55" />
            <div className="absolute inset-0 bg-linear-to-b from-[#050505]/70 via-transparent to-[#050505]/85" />
            <section className="relative z-10 min-h-screen flex items-center">
                <div className="w-full px-6 sm:px-10 lg:px-16">
                    <div className="mx-auto max-w-6xl grid items-center gap-10 md:grid-cols-2">
                        <div className="max-w-2xl">
                            <h1 className="font-omen-title mt-6 text-[#f2f2f2] tracking-[0.18em] uppercase text-4xl sm:text-5xl md:text-6xl leading-tight">
                                EL RITO COMIENZA
                            </h1>

                            <p className="font-omen-body mt-4 text-[#b5b5b5] text-base sm:text-lg max-w-xl leading-relaxed">
                                <span className="block">
                                    La entrada ceremonial a un cine consagrado a lo prohibido.
                                </span>
                                <span className="block mt-2">
                                    Aquí no se proyectan películas: se invocan recuerdos, se repiten
                                    visiones y se preservan obras que nunca debieron volver a la luz.
                                </span>
                            </p>

                            <div className="mt-10">
    <Link
        to="/movies"
        className="inline-flex items-center justify-center px-8 py-3 border border-red-900/50 bg-red-950/20 hover:bg-red-700 hover:text-white hover:shadow-[0_0_15px_rgba(185,28,28,0.8)] text-red-700 font-bold font-omen-body uppercase tracking-[0.2em] rounded-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-700"
    >
        Iniciar el Ritual
    </Link>

    <p className="font-omen-body mt-3 text-sm text-[#b5b5b5]/90">
        Proyección sujeta a restricciones no documentadas
    </p>
</div>
                        </div>

                        <div className="hidden md:flex justify-end">
                            <CursedCarousel />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
