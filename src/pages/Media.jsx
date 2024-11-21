import { Box, Typography } from "@mui/material"
import { HeroSection } from "../components/HeroSection"
import media2 from "../assets/media2.png"
import { AreasOfExpertise } from "../components/ExpertiseSection"
import { mediaText } from "../texts"

export const Media = () => {
    return(
        <div >
          <HeroSection />
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={"100%"}
            height={"auto"}
            sx={{
              flexDirection: { xs: 'column', sm: 'row' }, 
            }}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              width={"50%"}
              height={"auto"}
              paddingLeft={"150px"}
              paddingTop={"80px"}
              gap={2}
              sx={{
                paddingLeft: { xs: "20px", sm: "150px" }, 
                paddingTop: { xs: "40px", sm: "80px" }, 
                width: { xs: "100%", sm: "50%" }, 
              }}
            >
              <Typography variant="h7" fontWeight={"bold"}>
                New Motive
              </Typography>
              <Typography variant="h4" fontWeight={"bold"} fontFamily={"times"}>
                Media
              </Typography>
              <Typography color="#B7BABD" textAlign={"justify"}  paddingRight={'20px'}>
              {mediaText.description}
              </Typography>
            </Box>
            <Box
              component={'img'}
              src={media2}
              alt="Media2"
              sx={{
                height: 'auto',
                width: { xs: "100%", sm: "50%" }, 
                marginTop: { xs: "20px", sm: "0" }, 
              }}
            />
          </Box>
          <Box
            display={"flex"}
            paddingLeft={"150px"}
            flexDirection={"column"}
            width={"100%"}
            gap={2}
            paddingBottom={"50px"}
            paddingRight={"100px"}
            sx={{
              paddingLeft: { xs: "20px", sm: "150px" }, 
              paddingRight: { xs: "20px", sm: "100px" }, 
              width: { xs: "100%", sm: "100%" },
            }}
          >
            <Typography variant="h7" fontWeight={"bold"}>
              Sub-Domains
            </Typography>
            <Typography variant="h4" fontWeight={"bold"} fontFamily={"times"}>
              Areas Of Expertise
            </Typography>
            <AreasOfExpertise />
          </Box>
        </div>
    )
}