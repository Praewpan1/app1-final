import React, { Component  ,useRef, useState } from "react";

export default function Karaokae() {
    const num1 =useRef()
    const num2 =useRef()
    const result =useRef()
    let [select,setSelect] = useState('')

    const onClickButtonTotal = () => {
      if(select==='nohave'){
        if(num1.current.value ===''){
            alert('กรุณากรอกจำนวนชั่วโมง')
        }
        result.current.value= num1.current.value*120
      }
      if(select==='have'){
        if(num2.current.value ===''){
            alert('กรุณากรอกจำนวนชั่วโมง')
        }
        result.current.value= num2.current.value*80
      }

    }
    const onChange = (ev) => {
        if(ev.target.id === 'nohave'){
           num2.current.value=''
           result.current.value=''
            setSelect('nohave')
        }
        if(ev.target.id === 'have'){
            num1.current.value=''
            result.current.value=''
            setSelect('have')
        }
        
        
        }
   
    
    return (
        <div style={{marginTop:10,marginLeft:10}}> 
            <table width="400" border="2" bordercolor="#000000">
                <tr><td colspan="2" id="karaokae">ร้านคาราโอเกะ</td></tr>
                <tr>
                    <td>
                        <br />&nbsp;&nbsp;<input type="radio" name="c1" id="nohave" value="ไม่มีบัตร" onChange={onChange} />ไม่มีบัตรนักศึกษา <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ชั่วโมงละ 120 บาท จำนวน
                        <input type="text" size="2" id="txtqty1"  ref={num1}/> ชั่วโมง <br />
                        &nbsp;&nbsp;<input type="radio" name="c1" id="have" value="มีบัตร" onChange={onChange} />มีบัตรนักศึกษา <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ชั่วโมงละ 80 บาท จำนวน
                        <input type="text" size="2" id="txtqty2" ref={num2} /> ชั่วโมง <br /><br />
                    </td>
                </tr>
            </table><br />
            <button onClick={onClickButtonTotal} >คิดเงิน</button><br />
            รวมเป็นเงินทั้งสิ้น = <input type="text" id="txtTotal" readOnly  ref={result}/> บาท
        </div>

    );

}
