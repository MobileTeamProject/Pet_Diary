import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

const DateSelectHeader = () => {
  return (
    <View key={"header"} style={styles.dateHeaderView}>
      <DateSelectList weekDay="일" />
      <DateSelectList weekDay="월" />
      <DateSelectList weekDay="화" />
      <DateSelectList weekDay="수" />
      <DateSelectList weekDay="목" />
      <DateSelectList weekDay="금" />
      <DateSelectList weekDay="토" />
    </View>
  );
};

const DateSelectList = ({ weekDay }) => {
  return (
    <View style={styles.textView}>
      <Text key={weekDay} style={styles.textStyles}>
        {weekDay}
      </Text>
    </View>
  );
};

DateSelectList.propTypes = {
  weekDay: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  dateHeaderView: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textView: {
    justifyContent: "center",
    alignItems: "center",
    width: 54,
    height: 30,
    borderWidth: 1,
  },
  textStyles: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
});

export default DateSelectHeader;