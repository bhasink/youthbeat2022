import Link from 'next/link'

const Index = () => {
  return (
    <section className="fstfoldes">
      <div className="row">
        <div className="col-md-6">
          <Link href={`ambassador`}>
            <img src="/images/ambascta.png" />
            <img src="/images/bombobjs.png" className="objflts" />
          </Link>
        </div>
        <div className="col-md-6">
          <Link href="/creator">
            <img src="/images/creatorcta.png" />
            <img src="/images/creobj.png" className="objflts" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Index
