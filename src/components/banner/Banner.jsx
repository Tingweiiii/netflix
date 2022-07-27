import React from "react";
import Button from "../button/Button";
import { BannerContainer, BannerContent, BannerTitle, BannerText, BannerButtonGroup } from './banner.element'
import { MdPlayArrow, MdInfo } from 'react-icons/md'

function Banner({ movie }) {

  const ImgUrl = "https://image.tmdb.org/t/p/original"
  const truncate = (str, n) => {
    return str?.length >= n ? `${str.substring(0, n)}...` : str
  }

  const {backdrop_path, poster_path, name, original_name, title, original_title, overview} = movie
  return (
    <BannerContainer bg={`${ImgUrl}${backdrop_path}` || `${ImgUrl}${poster_path}` || "https://images.unsplash.com/photo-1512070679279-8988d32161be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80"}>
      <BannerContent>
        <BannerTitle>{name || original_name || title || original_title}</BannerTitle>
        <BannerText>{truncate(overview, 150)}</BannerText>
        <BannerButtonGroup>
          <Button text="Play" fontColor="#000" bgColor="#fff" icon={<MdPlayArrow />}/>
          <Button text="Read More" fontColor="#fff" bgColor="gray" icon={<MdInfo />}/>
        </BannerButtonGroup>
      </BannerContent>
    </BannerContainer>
  )
}

export default Banner;
