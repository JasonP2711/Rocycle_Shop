
import Image from 'next/image'
import Img1 from '../../image/slides/pexels-mike-1174103.jpg'

interface typeListTest {
    name: string;
    image: string;
  }
  
  const list_test: typeListTest[] = [
    {
      name:"Mountain",
      image: "",
    },
    {
      name:"Gravel",
      image: ""
    },
    {
      name:"Road",
      image: ""
    },
    {
      name:"Accessory",
      image: ""
    },
    {
      name:"Kids-bike",
      image: ""
    },
    {
      name:"E-bike",
      image: ""
    }
  ]
  


const Categories = (props:{}) =>{



    return(
        <>
            <div className=' h-auto bg-neutral-300'>
            <p className='mt-1 flex items-center justify-center text-3xl'>Categories</p>
            <div>
              <ul className='md:mt-15 md: ml-20 md:flex md:items-center md:justify-center md:flex-wrap  '>
                {
                  list_test && list_test?.map((item, index)=>{
                    return(
                      <>
                 <li className='mr-20 mt-6 w-72 h-56 md:border md:rounded-xl border-neutral-900 hover:shadow-2xl cursor-pointer'>
                 <p className='flex items-center justify-center text-xl font-bold'>{item.name}</p>
                  <div className="pt-3 pl-4">
                    <Image
                    src={Img1}
                    alt="My Image"
                    width={255}
                    height={250}
                    className='transform hover:scale-105 transition duration-700 border rounded-lg'
                    />
                  </div>

                </li>
                      </>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </>
    )
}

export default Categories