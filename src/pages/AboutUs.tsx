"use client";

const AboutUs = () => {
	return (
		<div className="max-w-5xl w-full mx-auto px-2 mt-10">
			<header className="mx-auto max-w-3xl text-center">
				<p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-black/50">About Zarganz</p>
				<h1 className="mt-4 text-black text-[28px] uppercase tracking-wide font-bold">About us</h1>
				<p className="mt-4 text-xs font-medium leading-7 text-black/75">
					Zarganz is a customer-focused online store built to offer a simple, reliable, and enjoyable shopping experience. We bring together carefully selected products, clear communication, and dependable service so our customers can shop with confidence.
				</p>
			</header>

			<main className="mx-auto mt-14 max-w-4xl">
				<div className="mx-auto max-w-3xl space-y-12">
					<section className="grid grid-cols-[26px_1fr] gap-4 items-start">
						<span className="pt-1 text-sm font-semibold leading-none text-black/60">01</span>
						<div>
							<p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-black/45">The beginning</p>
							<h2 className="mt-0.5 text-zinc-800 text-3xl uppercase tracking-wide font-bold">Who We Are</h2>
							<p className="mt-4 max-w-2xl text-xs font-medium leading-7 text-black/75">
								We are a Bangladesh-based brand committed to making everyday shopping easier. Our team focuses on quality, affordability, and a smooth customer journey from browsing to delivery.
							</p>
						</div>
					</section>

					<section className="grid grid-cols-[26px_1fr] gap-4 items-start">
						<span className="pt-1 text-sm font-semibold leading-none text-black/60">02</span>
						<div>
							<p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-black/45">What drives us</p>
							<h2 className="mt-0.5 text-zinc-800 text-3xl uppercase tracking-wide font-bold">Our Mission</h2>
							<p className="mt-4 max-w-2xl text-xs font-medium leading-7 text-black/75">
								Our mission is to provide customers with products they love, backed by responsive support and transparent policies. We aim to build trust through consistency, care, and a service experience that feels personal.
							</p>
						</div>
					</section>

					<section className="grid grid-cols-[26px_1fr] gap-4 items-start">
						<span className="pt-1 text-sm font-semibold leading-none text-black/60">03</span>
						<div>
							<p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-black/45">What we bring</p>
							<h2 className="mt-0.5 text-zinc-800 text-3xl uppercase tracking-wide font-bold">What We Offer</h2>
							<ul className="mt-4 max-w-2xl space-y-3 text-xs font-medium leading-7 text-black/75">
								<li>Carefully selected products for everyday needs and lifestyle preferences.</li>
								<li>A straightforward shopping experience with clear product details.</li>
								<li>Fast and responsive customer support through email and phone.</li>
								<li>Delivery-focused service with a commitment to handling orders responsibly.</li>
							</ul>
						</div>
					</section>

					<section className="grid grid-cols-[26px_1fr] gap-4 items-start">
						<span className="pt-1 text-sm font-semibold leading-none text-black/60">04</span>
						<div>
							<p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-black/45">Why people stay</p>
							<h2 className="mt-0.5 text-zinc-800 text-3xl uppercase tracking-wide font-bold">Why Choose Zarganz</h2>
							<ul className="mt-4 max-w-2xl space-y-3 text-xs font-medium leading-7 text-black/75">
								<li>We value trust and transparency in every order.</li>
								<li>We keep our policies simple and customer-friendly.</li>
								<li>We prioritize support before and after purchase.</li>
								<li>We continuously improve based on customer feedback.</li>
							</ul>
						</div>
					</section>

					<section className="grid grid-cols-[26px_1fr] gap-4 items-start">
						<span className="pt-1 text-sm font-semibold leading-none text-black/60">05</span>
						<div>
							<p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-black/45">Looking ahead</p>
							<h2 className="mt-0.5 text-zinc-800 text-3xl uppercase tracking-wide font-bold">Our Commitment</h2>
							<p className="mt-4 max-w-2xl text-xs font-medium leading-7 text-black/75">
								We are committed to treating every order with care and every customer with respect. Whether you are shopping for essentials or exploring something new, we want Zarganz to feel dependable, welcoming, and easy to use.
							</p>
						</div>
					</section>
				</div>

				<section className="mt-16 pb-10">
					<h4 className="text-zinc-800 text-sm uppercase text-center font-semibold tracking-wide">Contact Information</h4>
					<ul className="mx-auto mt-5 max-w-3xl space-y-2 text-center text-xs font-medium leading-7 text-black/75 sm:text-left">
						<li>Trade name: Zarganz</li>
						<li>Phone number: +8801894555555</li>
						<li>Email: support@zarganz.com</li>
						<li>Warehouse address: 70, North Badda, 5th Floor, Pragati Sarani, Badda, Dhaka 1229</li>
						<li>Trade number: TRAD/DNCC/55555/2022</li>
					</ul>
				</section>
			</main>
		</div>
	);
};

export default AboutUs;
