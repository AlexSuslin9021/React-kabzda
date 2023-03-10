
type PropsOnOff={
    on:boolean
    callback:(check:boolean)=>void

}
export function OnOff(props:PropsOnOff){


    console.log('OnOff')


   const OnStyle={
       width:'30px',
       height: '20px',
       borderRadius:'5px',
       border:'1px solid black',
       // marginLeft:'5px',
       padding:'2px',
       display:'inline-block',
       background: props.on ? 'green' :'white'
   }
   const OfStyle={
       width:'30px',
       height: '20px',
       borderRadius:'5px',
       border:'1px solid black',
       padding:'2px',
       // marginLeft:'5px',
       display:'inline-block',
       background:props.on ? 'white' :'red'
   }
   const OStyle={
        width:'15px',
       height: '10px',
       borderRadius:'5px',
       border:'1px solid black',
       marginLeft:'5px',
       display:'inline-block',
       background: props.on ? 'green' :'red'

   }


    return<div>
        <div style={OnStyle} onClick={()=>props.callback(!props.on)}>on</div>
        <div style={OfStyle} onClick={()=>props.callback(!props.on)}>off</div>
        <div style={OStyle} onClick={()=>props.callback(!props.on)}></div>
    </div>
}