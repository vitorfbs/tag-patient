#include <SPI.h>
#include <MFRC522.h>

#define SS_PIN 53
#define RST_PIN 49

MFRC522 mfrc522(SS_PIN, RST_PIN);

void setup(){
  Serial.begin(9600);
  SPI.begin();
  mfrc522.PCD_Init();
}

void loop(){
  if(mfrc522.PICC_IsNewCardPresent()){
    if(mfrc522.PICC_ReadCardSerial()){
      
      for(byte i = 0; i < mfrc522.uid.size; i++){
          Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : "");
          Serial.print(mfrc522.uid.uidByte[i], HEX);
      }
      
      Serial.println();
      mfrc522.PICC_HaltA();
    }
  }
}
