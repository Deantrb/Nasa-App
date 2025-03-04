import React, { useEffect, useState } from "react";
import FetchApi from "../../utils/service";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import TodayImage from "../../components/TodayImage";
import { NasaApiResponse } from "../../types";
import { format, sub } from "date-fns";
import Last5DaysImage from "../../components/Last5DaysImage/Last5DaysImage";

const Home = () => {
  const [todayImage, setTodayImage] = useState<NasaApiResponse>({});
  const [last5Days, setLast5Days] = useState<NasaApiResponse[]>([]);

  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const tiResponse = await FetchApi();
        setTodayImage(tiResponse);
      } catch (error) {
        setTodayImage({});
      }
    };

    const loadLastFiveImages = async () => {
      try {
        const dateNow = new Date();
        const today = format(dateNow, "yyyy-MM-dd");
        const today5ago = format(sub(dateNow, { days: 4 }), "yyyy-MM-dd");

        const lfiResponse = await FetchApi(
          `&start_date=${today5ago}&end_date=${today}`
        );
        setLast5Days(lfiResponse);
      } catch (error) {
        console.log(error);
        setLast5Days([]);
      }
    };

    loadTodaysImage().catch(null);
    loadLastFiveImages().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <TodayImage {...todayImage} />
      <Last5DaysImage last5Days={last5Days}/>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
