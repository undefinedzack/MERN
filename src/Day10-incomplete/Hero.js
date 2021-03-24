const Hero = ({hero}) => {
    if (hero === 'joker'){
        throw new Error("Not a Hero")
    }
    return(
        <>
            <h1>{hero}</h1>
        </>
    )

}

export default Hero