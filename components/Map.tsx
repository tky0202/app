"use client"

import React, { useEffect, useState } from "react";
import Header from './Header';
import Footer from './Footer';
import styles from '../src/app/page.module.css';
import { Loader } from '@googlemaps/js-api-loader';

export default function Page() {
  const mapRef = React.useRef<HTMLDivElement>(null);
  const [videoUrl, setVideoUrl] = useState<string>("");
    const renderVideoPlayer = () => {
    const videoPlayerContainer = document.getElementById("video-player");
    if (videoPlayerContainer && videoUrl) { // videoUrl が空でない場合のみ再生
      videoPlayerContainer.innerHTML = `
        <video width="320" height="180" controls autoplay>
          <source src="${videoUrl}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      `;
    }
  };

  useEffect(() => {
    const initMap = async () => {

      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version:'weekly'
      });
      const { Map } = await loader.importLibrary('maps');
      const { Marker } = await loader.importLibrary('marker') as google.maps.MarkerLibrary;
      const position1 = {
        lat: 35.8925913640772,
        lng: 139.63465727646832
      }
      const position2 = {
        lat: 35.874936,
        lng: 139.643003
      }
      const position3 ={
        lat:35.875662,
        lng:139.642610
      }
      const position4 ={
        lat:35.875786, 
        lng:139.642994
      }
      const position5 ={
        lat:35.893895,
        lng:139.632473
      }
      const position6 ={
        lat:35.893696,
        lng:139.632912
      }
      const position7 ={
        lat:35.89403423021694,
        lng:139.63013304918198
      }
      const position8 ={
        lat:35.88193960844639,
        lng:139.62572800191248
      }
      const position9 ={
        lat:35.88182116907935, 
        lng:139.62575616543708
      }
      const position10 ={
        lat:35.88189886095311,
        lng:139.6257890226301
      }
      const position11 ={
        lat:35.10278233725612,
        lng:139.076568040353
      }

      const position12 ={
        lat:35.679808982832625,
        lng:139.76766440579755
      }

      const position13 ={
        lat:34.975561,
        lng:139.092232
      }

      const mapOptions: google.maps.MapOptions = {
        center: position1,
        zoom: 13,
        mapId: 'MY_NEXTJS_MAPID'
      }

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
      
      const marker1 = new Marker({
        map: map,
        position: position1
      });

      const marker2 = new Marker({
        map: map,
        position: position2
      });

      const marker3 = new Marker({
        map: map,
        position: position3
      });

      const marker4 = new Marker({
        map: map,
        position: position4
      });

      const marker5 = new Marker({
        map: map,
        position: position5
      });

      const marker6 = new Marker({
        map: map,
        position: position6
      });

      const marker7 = new Marker({
        map: map,
        position: position7
      });

      const marker8 = new Marker({
        map: map,
        position: position8
      });

      const marker9 = new Marker({
        map: map,
        position: position9
      });

      const marker10 = new Marker({
        map: map,
        position: position10
      });

      const marker11 = new Marker({
        map: map,
        position: position11
      });

      const marker12 = new Marker({
        map: map,
        position: position12
      });

      const marker13 = new Marker({
        map: map,
        position: position13
      });

      const infoWindow = new google.maps.InfoWindow();
      marker1.addListener("click", () => {
        if (infoWindow) {
          infoWindow.setContent("<iframe  class='map_iframe' src='https://www.youtube.com/embed/M2Zm9JT4cUs?si=q83mRL-M_T2BxA5g&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;rel=0'></iframe>");
          infoWindow.open(map, marker1);
          renderVideoPlayer();
        }
      });
      marker2.addListener("click", () => {
        if (infoWindow) {
          infoWindow.setContent("<iframe  class='map_iframe' src='https://www.youtube.com/embed/TU8q12FHpn0?si=tJCYCZg1mDWTMT8v&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;rel=0'></iframe>");
          infoWindow.open(map, marker2);
          renderVideoPlayer();
        }
      });
      marker3.addListener("click", () => {
        if (infoWindow) {
          infoWindow.setContent("<iframe  class='map_iframe' src='https://www.youtube.com/embed/Q1rShU0lM0g?si=lz8GqMzgVzZ-CY8r&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;rel=0'></iframe>");
          infoWindow.open(map, marker3);
          renderVideoPlayer();
        }
      });
      marker4.addListener("click", () => {
        if (infoWindow) {
          infoWindow.setContent("<iframe  class='map_iframe' src='https://www.youtube.com/embed/Wcvp7M2o69E?si=6MRVZugr3X6t_6jd&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;rel=0'></iframe>");
          infoWindow.open(map, marker4);
          renderVideoPlayer();
        }
      });
      marker5.addListener("click", () => {
        if (infoWindow) {
          infoWindow.setContent("<iframe  class='map_iframe' src='https://www.youtube.com/embed/g54AzBEeioM?si=v1_bG5UNqFAyJDj-&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;rel=0'></iframe>");
          infoWindow.open(map, marker5);
          renderVideoPlayer();
        }
      });
      marker6.addListener("click", () => {
        if (infoWindow) {
          infoWindow.setContent("<iframe  class='map_iframe' src='https://www.youtube.com/embed/E67brG2nSLs?si=btMEml8Euib9UtoD&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;rel=0'></iframe>");
          infoWindow.open(map, marker6);
          renderVideoPlayer();
        }
      });
      marker7.addListener("click", () => {
        if (infoWindow) {
          infoWindow.setContent("<iframe  class='map_iframe' src='https://www.youtube.com/embed/nl9WikoK8hU?si=gWoEx1i-APsndxZJ&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;rel=0'></iframe>");
          infoWindow.open(map, marker7);
          renderVideoPlayer();
        }
      });
      marker8.addListener("click", () => {
        if (infoWindow) {
          infoWindow.setContent("<iframe  class='map_iframe' src='https://www.youtube.com/embed/65SET8xj6Ro?si=y796BJeNbKRvrLfe&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;rel=0'></iframe>");
          infoWindow.open(map, marker8);
          renderVideoPlayer();
        }
      });
      marker9.addListener("click", () => {
        if (infoWindow) {
          infoWindow.setContent("<iframe  class='map_iframe' src='https://www.youtube.com/embed/T3S0gqxXjWY?si=0lLWOqaKgeenSx3G&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;rel=0'></iframe>");
          infoWindow.open(map, marker9);
          renderVideoPlayer();
        }
      });
      marker10.addListener("click", () => {
        if (infoWindow) {
          infoWindow.setContent("<iframe  class='map_iframe' src='https://www.youtube.com/embed/rxR7ljbmBTs?si=3mBmhBIrjRpS0nVS&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;rel=0'></iframe>");
          infoWindow.open(map, marker10);
          renderVideoPlayer();
        }
      });
      marker11.addListener("click", () => {
        if (infoWindow) {
          infoWindow.setContent("<iframe  class='map_iframe' src='https://www.youtube.com/embed/0dfWjQBozm4?si=Yfppabh_bJTybXQT&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;rel=0'></iframe>");
          infoWindow.open(map, marker11);
          renderVideoPlayer();
        }
      });
      marker12.addListener("click", () => {
        if (infoWindow) {
          infoWindow.setContent("<iframe  class='map_iframe' src='https://www.youtube.com/embed/Vry3SCavQ6Q?si=S0dDamh5shXSZS_4&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;rel=0'></iframe>");
          infoWindow.open(map, marker12);
          renderVideoPlayer();
        }
      });
      marker13.addListener("click", () => {
        if (infoWindow) {
          infoWindow.setContent("<iframe  class='map_iframe' src='https://www.youtube.com/embed/lNjzPQCjIkk?si=c7_Pb0J0fxM5lwp4&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;rel=0'></iframe>");
          infoWindow.open(map, marker13);
          renderVideoPlayer();
        }
      });
    }
    initMap();
  }, [renderVideoPlayer]); 
  

  return (
    <>
      <Header />
      <div style={{width: '100vw', height:'100vh'}} ref={mapRef} />
      <p className={`${styles.discription} ${styles.p1} ${styles.pb5}`}>管理人がiPhoneで動画撮影した電車をGoogle Mapにアップロードしています。品質は凄く悪く、本当は秘密のスポット的な動画を撮影したいんですが、あくまでもお出かけ途中に撮影しているので駅が多いです..。参考になるかわかりませんがご覧ください。</p>
      <Footer />
    </>
  );
}