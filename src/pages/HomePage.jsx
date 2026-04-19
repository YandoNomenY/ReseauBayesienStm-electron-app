import { Card } from "../components/Card"
import { Inputs } from "../components/Inputs"
import { homeStyles as hstyle } from "../utilities/styles"
import gemini from "../assets/gemini.png"
import fb from "../assets/fb.png"
import chess from "../assets/chess.png"
import gpt from "../assets/gpt.png"
import claude from "../assets/claude.png"
import { Navbar } from "../components/Navbar"

export const HomePage = () => {
    return(
        <>
        <div className="">
            <Navbar />
        </div>
        <div className={hstyle.Container}>
            
            <h1 className={hstyle.title}>Google</h1>
            {/* Barre de recherche */}
            <Inputs />

            {/* Liste des racourcies */}
            <div className="flex flex-wrap  justify-center items-center">
                <Card image={gemini} titre={"Google Gemini "}/>
                <Card image={fb} titre={"Facebook "}/>
                <Card image={chess} titre={"Lichess "}/>
                <Card image={gpt} titre={"Chat-GPT "}/>
                <Card image={claude} titre={"Claude.ai"}/>
                
            </div>
        </div>
        </>
    )
}