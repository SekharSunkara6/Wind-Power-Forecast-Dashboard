import Image from "next/image"

export default function Header(){

return(

<div className="bg-black text-white p-4 flex items-center gap-3">

<Image
src="/reint-logo.webp"
alt="REint AI Logo"
width={50}
height={50}
/>

<h1 className="text-xl font-bold">
Wind Power Forecast Dashboard
</h1>

</div>

)

}