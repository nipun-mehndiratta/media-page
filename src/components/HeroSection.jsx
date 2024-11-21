import { Box } from "@mui/material"
import media from "../assets/media.png"

export const HeroSection = () => {
    return (
        <Box component={'img'} src={media} alt="Media" sx={{width: '100%', height: 'auto'}}/>
    )
}