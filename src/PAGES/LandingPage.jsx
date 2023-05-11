import React from "react";
import Box from "@mui/material/Box";
import {  Typography } from "@mui/material";
import MediaCard from "../COMPONENTS/MediaCard";
import axios from "axios";
import { useEffect, useState } from "react";


import gitimg from "../image/github.jpg";
import spoimg from "../image/spotify.jpg"
import instaimg from "../image/insta.jpg"
import twitterimg from "../image/twitter.jpg";
import PermanentDrawer from "../COMPONENTS/Drawer";


function LandingPage() {

   


    return (
    <>
   
      <Box class="LandingPage">


        <div class="hello">
        <Typography  variant="h4" glutterbottom>
          Merhaba Sayfama Hoşgeldiniz{" "}
        </Typography>
        </div>


        <div className= "social-link">
           
            <MediaCard
               link ={'https://github.com/WizardLizard8998'}  
               img ={gitimg} 
               uname ={"WizardLizard8998"} 
               desc = {"Selam Github sayfama aşağıdan ulaşabilirsiniz. İnceleyip Göz atmayı unutmayın :D"}

            />
        

        
            <MediaCard
               link={"https://open.spotify.com/user/keremberkkan?si=ae79196654554b35"}
               img={spoimg}
               uname={"Kerem Berkkanoğlu"}
               desc={"Spotify listelerime bir göz atın derim kesinlikle. İçeride her türden müzik bulabilirsiniz."}

            />
        
            <MediaCard
               link={"https://www.instagram.com/kerem_berkkanoglu/"}
               img={instaimg}
               uname={"Kerem Berkkanoğlu"}
               desc={"Instagramıma hoşgeldiniz.Burada benden izler bulabilirsiniz. "}

            />
        
            <MediaCard
               link={"https://twitter.com/berkkanoglu"}
               img={twitterimg}
               uname={"Kerem Berkkanoğlu"}
               desc={"Twitter insanların özgürlük alanıdır. Kişisel profilime buradan erişebilirsiniz."}

            />
        
        
        
        
        </div>





      </Box>
    </>
  );
}

export default LandingPage;
