"use client"
import QRCode from "qrcode";
import { useState } from "react";
import "./styles.css";

function CustomQRCode() {
  const [url, setUrl] = useState<string>("");
  const [qrcode, setQrcode] = useState<string>('');
  const generateQRCode = () => {
    if(!url){
      return alert('Please enter a URL to generate QR Code')
    }
    QRCode.toDataURL(url, {
      width: 800,
      margin: 1.5,
      color: {
        dark: '#000000ff',
        light: '#ffffffff'
      }
    }, (err, url) => {
      if(err){
        return console.error('Error generating QR Code', err)
      }
      console.log('QR Code generated', url)
      setQrcode(url)
    })
      
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
        <input type="text" name="text" placeholder="e.g. https://google.com" value={url} onChange={(e) => setUrl(e.target.value)} />
        <button type="submit" onClick={generateQRCode}>Generate</button>
      {qrcode && <>
        <img src={qrcode} alt="QR Code" />
        <a href={qrcode} download='qrcode.png'>Download</a>
      </>}
    </div>
  )
}

export default CustomQRCode
