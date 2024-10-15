import Link from 'next/link'
 
export default function NotFound() {
  return (
    <section className="page_404 py-[40px]">
  <div className="container mx-auto">
    <div className="row">
      <div className="col-sm-12 ">
        <div className="col-sm-10 col-sm-offset-1  text-center">
          <div className="four_zero_four_bg bg-no-repeat mt-52	 bg-[url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')] h-[400px] bg-center ">
            <h1 className="text-center text-[80px] my-52">404</h1>

          </div>

          <div className="contant_box_404 mt-[-50px]">
            <h3 className="h2 text-4xl my-5">
              Look like you're lost
            </h3>   

            <p className='text-xl'>the page you are looking for not avaible!</p>

            <a href="" className="link_404">Go to Home</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}