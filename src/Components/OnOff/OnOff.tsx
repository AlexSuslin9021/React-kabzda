
type PropsOnOff={
    on:boolean
}
export function OnOff(props:PropsOnOff){
    const contentStyle={}
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
        <div style={OnStyle}>on</div>
        <div style={OfStyle}>off</div>
        <div style={OStyle}></div>
    </div>
}