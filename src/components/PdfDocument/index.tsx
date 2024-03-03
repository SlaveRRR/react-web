import React, { FC } from "react";
import { Document, Page, View, Text, Image } from "@react-pdf/renderer";
import { IDocument } from "./types";

type Props = {
  document: IDocument;
};

const PdfDocument: FC<Props> = ({
  document: { comment, picture, username },
}) => {
  return (
    <Document>
      <Page size="A4" wrap style={{
        paddingTop:'25px',
        display:'flex',
        flexDirection:"column",
        gap:'10px',
        alignItems:"center"
      }}>
        <View>
          <Text color="red">User: {username}</Text>
        </View>
        <View>
          <Text>{comment}</Text>
        </View>

        <View>{picture && <Image style={{
            width:'150px',
            height:'150px',
            objectFit:'cover'
        }} src={picture} />}</View>
      </Page>
    </Document>
  );
};

export default PdfDocument;
