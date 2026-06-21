export default function Hero(){
    return(
        <section className= "min-h-screen flex flex-col justify-center items-center">
            <h1 className= "text-3xl md:text-5xl lg:text-6xl font-bold">
                Abhishek Kumar
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl mt-4">
                XR Developer
            </h2>
            <p className= "mt-4 max-w-2xl text-center">
                Building immersive AR, VR and MR training
                applications using Unity, Meta XR,
                Vuforia and AR Foundation.
            </p>

            <div className= "flex gap-4 mt-6">
                <button>
                    View Projects
                </button>

                <button>
                    Contact Me
                </button>
            </div>
        </section>
    );
        
}