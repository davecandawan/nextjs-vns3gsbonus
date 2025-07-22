import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

const VidalyticsVideo = dynamic(() => import('../VidalyticsVideo/VidalyticsVideo'), {
  ssr: false,
});

interface ContentProps {
  buttonText?: string;
}

const Content: React.FC<ContentProps> = ({
  buttonText = 'Give Me My VNSH Holster + FREE QuickLock!',
}) => {
  const searchParams = useSearchParams();

  // Get all current URL parameters
  const getCheckoutUrl = (baseUrl: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const queryString = params.toString();
    return `${baseUrl}${queryString ? `?${queryString}` : ''}`;
  };
  return (
    <div className="min-h-screen bg-[url('/bg.webp')] bg-cover bg-fixed bg-repeat bg-center">
      <div className="sticky top-0 left-0 right-0 w-full bg-custom-green text-black text-center py-2 px-4 text-[1.3rem] sm:text-[1.5rem] font-semibold z-50 shadow-md">
        <a
          href={getCheckoutUrl('https://secure.vnsh.com/vns3gsbonus/checkout')}
          className="inline-block text-black hover:no-underline hover:text-black"
        >
          FREE <span className="line-through">$50</span> VNSH QuickLock With Every Order - This Page
          ONLY!
        </a>
      </div>
      <div className="w-full max-w-[1200px] mx-auto px-5 pt-4 pb-4 lg:px-20 bg-white -mt-2">
        <div className="space-y-8">
          <header className="text-center py-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-snug md:leading-tight mb-4 px-2">
              <span className="font-bold italic">Insanely Comfy Holster</span> Makes Any Semi-Auto
              (Plus 2 Extra Mags) <span className="font-bold italic">Disappear In Plain Sight</span>{' '}
              Even If You Wear
              <span className="underline"> Nothing But Gym Shorts, Sweatpants and T-Shirts!</span>
            </h1>
            <span className="text-xl md:text-2xl font-bold text-[#ff0000] px-4 pt-1 pb-0 inline-block italic">
              <span className="bg-[#ff0] px-1 py-1">
                Guaranteed Comfort Or 100% Of Your Money Back!
              </span>
            </span>
          </header>

          <div className="w-full max-w-4xl mx-auto -mt-4">
            <VidalyticsVideo />
          </div>

          <div className="text-center my-8">
            <a
              href={getCheckoutUrl('https://secure.vnsh.com/vns3gsbonus/checkout')}
              className="inline-block"
            >
              <button className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-4 px-8 text-xl md:text-4xl transition-all duration-300 animate-custom-pulse hover:opacity-100 hover:scale-105 whitespace-normal text-center flex items-center justify-center h-[100px] md:h-auto">
                <span className="inline-block w-full md:whitespace-nowrap">
                  <span className="block md:inline">Give Me My VNSH Holster</span>
                  <span className="block md:inline">+ FREE QuickLock!</span>
                </span>
              </button>
            </a>
          </div>
          <div className="w-full md:w-[80%] mx-auto max-w-[1120px] px-4 md:px-0">
            <Image
              src="/contentimages/quicklockbonus_new.webp"
              alt="VNSH Holster deal"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <header className="text-center py-1 md:py-6">
            <span className="text-3xl md:text-5xl font-semibold leading-tight md:leading-[1.2]">
              <span className="bg-[#f78f18] px-2 py-1">
                Discover Why Over 175,234 Americans Are Carrying With VNSH…
              </span>
            </span>
          </header>

          <div className="w-full max-w-7xl mx-auto space-y-8">
            <p className="text-xl md:text-2xl font-medium leading-tight">
              Literally{' '}
              <span className="font-bold">
                <span className="italic">hundreds of thousands</span>
              </span>{' '}
              of Americans are using VNSH to carry comfortably all day, every day.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              The biggest reason why is…
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              It’s GUARANTEED to be{' '}
              <span className="font-bold">
                <span className="italic">the most comfortable</span>
              </span>{' '}
              holster you’ve ever worn –{' '}
              <span className="font-bold">
                <span className="bg-[#ff0] py-1">or you get 100% of your money back!</span>
              </span>
            </p>
            <div className="mx-auto w-full md:max-w-[70%]">
              <Image
                src="/contentimages/guaranteed_banner.webp"
                alt="VNSH Holster deal"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              <b>
                <em>What makes it so comfortable??</em>
              </b>
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">The secret is our…</p>
            <header className="text-center py-1">
              <span className="text-[25px] md:text-[36px] font-bold leading-tight md:leading-[1.2] text-[rgb(255,156,0)]">
                Ultra-Plush <span className="text-red-600">"Yoga Pant" Material</span> Belt + a
                Robust Cordura Holster Body{' '}
                <span className="text-red-600">That'll Never Dig or Poke</span>
              </span>
            </header>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              Unlike traditional holsters that require a{' '}
              <span className="font-bold">bulky tactical belt</span> and constantly{' '}
              <span className="font-bold">jab at your body</span>…
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight mb-4">
              VNSH uses a durable but stretchy built-in belt that:
            </p>
            <div className="pl-8 md:pl-12">
              <ul className="space-y-5 mb-8 text-xl md:text-2xl font-medium leading-tight">
                <li className="flex items-start">
                  <div className="w-8 h-8 mr-3 relative top-1 flex-shrink-0">
                    <Image
                      src="/contentimages/greenCheck.png"
                      alt="Checkmark"
                      width={32}
                      height={32}
                      className="w-full h-auto"
                    />
                  </div>
                  <span className="mt-1">Effortlessly wicks sweat…</span>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 mr-3 relative top-1 flex-shrink-0">
                    <Image
                      src="/contentimages/greenCheck.png"
                      alt="Checkmark"
                      width={32}
                      height={32}
                      className="w-full h-auto"
                    />
                  </div>
                  <span className="mt-1">Never retains odor…</span>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 mr-3 relative top-1 flex-shrink-0">
                    <Image
                      src="/contentimages/greenCheck.png"
                      alt="Checkmark"
                      width={32}
                      height={32}
                      className="w-full h-auto"
                    />
                  </div>
                  <span className="mt-1">
                    Feels softer than your favorite PJs on Christmas morning…
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              … combined with a super tough Cordura blend holster body that gives you{' '}
              <span className="font-bold">top-notch retention</span> – with a non-rigid feel that’ll
              make you forget you're carrying at all
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              Plus, VNSH makes just about ANY semi auto{' '}
              <span className="font-bold">
                <u>disappear in plain sight</u>
              </span>
              .
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              <span className="italic">How many other holsters can do all that??</span>
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              <span className="font-bold">The answer is ZERO.</span>
            </p>
            <div className="text-center my-8">
              <a
                href={getCheckoutUrl('https://secure.vnsh.com/vns3gsbonus/checkout')}
                className="inline-block"
              >
                <button className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-4 px-8 text-xl md:text-4xl transition-all duration-300 animate-custom-pulse hover:opacity-100 hover:scale-105 whitespace-normal text-center flex items-center justify-center h-[100px] md:h-auto">
                  <span className="inline-block w-full md:whitespace-nowrap">
                    <span className="block md:inline">Give Me My VNSH Holster</span>
                    <span className="block md:inline">+ FREE QuickLock!</span>
                  </span>
                </button>
              </a>
            </div>
            <div className="text-center my-8">
              <p className="text-xl md:text-1xl font-bold leading-normal md:leading-tight text-[#ff0000]">
                <span className="bg-[#ff0] px-2 py-1">
                  60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
                </span>
              </p>
            </div>
            <header className="text-center py-1">
              <span className="text-[25px] md:text-[36px] font-bold leading-tight md:leading-[1.2] text-[rgb(255,156,0)]">
                Seriously, This Holster Works With 99.9% of Semi-Automatic Pistols On the Planet
              </span>
            </header>
            <div className="mx-auto w-full md:max-w-[70%]">
              <Image
                src="/contentimages/BlackHolster1.webp"
                alt="VNSH Holster deal"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              Our holster design means that{' '}
              <span className="font-bold">regardless of what pistol you own…</span> it will help you
              safely and comfortably carry it.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              No more needing to buy multiple holsters for all your pistols.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              Plus, since it has 2-built in mag pouches, now{' '}
              <span className="font-bold">you don’t need to spend extra money on mag pouches</span>{' '}
              to guarantee you’re never out of the fight.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              Take a look at the list of brands our holster works with and then grab yours before
              the price goes up!
            </p>
            <div className="w-full my-8 px-4">
              {/* Desktop Image */}
              <div className="hidden md:block w-full">
                <div className="mx-auto w-[90%] max-w-[1400px]">
                  <Image
                    src="/contentimages/LogoDesktop1.webp"
                    alt="Logo"
                    width={1400}
                    height={1000}
                    className="w-full h-auto rounded-lg"
                    priority
                  />
                </div>
              </div>
              {/* Mobile Image */}
              <div className="block md:hidden">
                <Image
                  src="/contentimages/LogoMobile2.webp"
                  alt="Logo mobile"
                  width={500}
                  height={800}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
            </div>
            <div className="text-center my-8">
              <a
                href={getCheckoutUrl('https://secure.vnsh.com/vns3gsbonus/checkout')}
                className="inline-block"
              >
                <button className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-4 px-8 text-xl md:text-4xl transition-all duration-300 animate-custom-pulse hover:opacity-100 hover:scale-105 whitespace-normal text-center flex items-center justify-center h-[100px] md:h-auto">
                  <span className="inline-block w-full md:whitespace-nowrap">
                    <span className="block md:inline">Give Me My VNSH Holster</span>
                    <span className="block md:inline">+ FREE QuickLock!</span>
                  </span>
                </button>
              </a>
            </div>
            <div className="text-center my-8">
              <p className="text-xl md:text-1xl font-bold leading-normal md:leading-tight text-[#ff0000]">
                <span className="bg-[#ff0] px-2 py-1">
                  60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
                </span>
              </p>
            </div>
            <header className="text-center py-1">
              <div className="text-[25px] md:text-[36px] font-bold leading-tight md:leading-[1.0] text-[#ff0000]">
                <div>
                  <em>Limited FREE Bonus Gift (Worth $50)</em>
                </div>
                <div className="my-0 md:my-2">
                  <span className="text-[rgb(255,156,0)]">Next 127 Buyers Get a </span>
                  <em>Complimentary VNSH</em>
                </div>
                <div>
                  <em>QuickLock Safe!</em>
                </div>
              </div>
            </header>
            <div className="w-full md:w-[80%] mx-auto max-w-[1120px] px-4 md:px-0">
              <Image
                src="/contentimages/quicklockbonus_new.webp"
                alt="VNSH Holster deal"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              For a short time, we’re giving out our bestselling lockbox –{' '}
              <span className="font-bold">
                <span className="italic">the VNSH QuickLock</span>
              </span>{' '}
              –{' '}
              <span className="bg-[#ff0] py-1">
                100% FREE with every holster order (from this page ONLY)!
              </span>
            </p>
            <div className="pl-4 md:pl-6">
              <ul className="space-y-6 mb-6 text-xl md:text-2xl font-medium leading-tight">
                <li className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1 flex items-start">
                    <div className="w-8 h-8 mr-3 relative top-1 flex-shrink-0">
                      <Image
                        src="/contentimages/greenCheck.png"
                        alt="Checkmark"
                        width={32}
                        height={32}
                        className="w-full h-auto"
                      />
                    </div>
                    <span className="mt-1">
                      <span className="font-bold">Ultra Secure, But Lightning Fast Access -</span> a
                      simple but robust key lock gives you total peace-of-mind that{' '}
                      <span className="font-bold">
                        <span className="italic">nobody</span>
                      </span>{' '}
                      is getting inside but you. Yet you're always seconds away from having your
                      weapon in-hand.
                    </span>
                  </div>
                  <div className="w-full md:w-64 flex-shrink-0 rounded-lg overflow-hidden flex items-center">
                    <div className="relative w-full h-auto">
                      <Image
                        src="/contentimages/VNSH_Gun_Safe1.webp"
                        alt="Secure Access"
                        width={256}
                        height={256}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </li>

                <li className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1 flex items-start">
                    <div className="w-8 h-8 mr-3 relative top-1 flex-shrink-0">
                      <Image
                        src="/contentimages/greenCheck.png"
                        alt="Checkmark"
                        width={32}
                        height={32}
                        className="w-full h-auto"
                      />
                    </div>
                    <span className="mt-1">
                      <span className="font-bold">
                        Great for Your Car, Nightstand, or Really Anywhere -
                      </span>{' '}
                      small enough to easily fit in a bedroom drawer or cabinet, you can also toss
                      it in your backpack then easily stow in any car glove box or console.
                    </span>
                  </div>
                  <div className="w-full md:w-64 flex-shrink-0 rounded-lg overflow-hidden flex items-center">
                    <div className="relative w-full h-auto">
                      <Image
                        src="/contentimages/VNSH_Gun_Safe2.webp"
                        alt="Portable Design"
                        width={256}
                        height={256}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </li>

                <li className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1 flex items-start">
                    <div className="w-8 h-8 mr-3 relative top-1 flex-shrink-0">
                      <Image
                        src="/contentimages/greenCheck.png"
                        alt="Checkmark"
                        width={32}
                        height={32}
                        className="w-full h-auto"
                      />
                    </div>
                    <span className="mt-1">
                      <span className="font-bold">
                        Not Just for Guns, Perfect for Other Valuables Too -
                      </span>{' '}
                      use it to lock up cash, your personal IDs, watches and jewelry, or anything
                      you don't want swiped while you're not looking!
                    </span>
                  </div>
                  <div className="w-full md:w-64 flex-shrink-0 rounded-lg overflow-hidden flex items-center">
                    <div className="relative w-full h-auto">
                      <Image
                        src="/contentimages/VNSH_Gun_Safe3.webp"
                        alt="Versatile Use"
                        width={256}
                        height={256}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <p className="text-xl md:text-2xl font-medium leading-tight">Normally $50…</p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              The VNSH QuickLock is yours{' '}
              <b>
                <em>
                  <span className="bg-[#ff0] py-1text-red-600">totally FREE</span>
                </em>
              </b>{' '}
              with your holster order today!
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              Plus, when you grab this deal, you’ll be doing so{' '}
              <span className="font-bold">
                <span className="italic">100% Risk-Free</span>
              </span>
              , because…
            </p>
            <div className="text-center my-8">
              <a
                href={getCheckoutUrl('https://secure.vnsh.com/vns3gsbonus/checkout')}
                className="inline-block"
              >
                <button className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-4 px-8 text-xl md:text-4xl transition-all duration-300 animate-custom-pulse hover:opacity-100 hover:scale-105 whitespace-normal text-center flex items-center justify-center h-[100px] md:h-auto">
                  <span className="inline-block w-full md:whitespace-nowrap">
                    <span className="block md:inline">Give Me My VNSH Holster</span>
                    <span className="block md:inline">+ FREE QuickLock!</span>
                  </span>
                </button>
              </a>
            </div>
            <div className="text-center my-8">
              <p className="text-xl md:text-1xl font-bold leading-normal md:leading-tight text-[#ff0000]">
                <span className="bg-[#ff0] px-2 py-1">
                  60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
                </span>
              </p>
            </div>
            <header className="text-center py-1">
              <div className="text-[25px] md:text-[36px] font-bold leading-tight md:leading-[1.0] text-[rgb(255,156,0)]">
                <div>You’re Getting An</div>
                <div className="my-0 md:my-2">
                  <span className="text-[rgb(255,0,0)]">Iron-Clad, Money-Back </span>
                  <span>Guarantee</span>
                </div>
              </div>
            </header>
            <div className="w-4/5 md:w-[30%] mx-auto max-w-[1120px] px-4 md:px-0">
              <Image
                src="/contentimages/guarantee-money-back-200.webp"
                alt="VNSH Holster deal"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              Love everything about your order, or{' '}
              <b>
                <em>we’ll refund you every penny.</em>
              </b>
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">It’s that simple.</p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              If you aren’t totally thrilled, all you have to do is contact our{' '}
              <span className="font-bold">
                <span className="italic">US-Based Support Team</span>
              </span>{' '}
              within 60 days to get a full refund.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              <span className="bg-[#ff0] py-1">
                Plus, we also give you a{' '}
                <span className="font-bold">
                  <span className="italic">2-year workmanship guarantee</span>
                </span>{' '}
                as well!
              </span>
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              We know you’ll love your VNSH gear, which is why we’re happy to extend you these
              iron-clad guarantees.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              So if you want to get an awesome price on the world’s most comfortable holster..
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              <span className="font-bold">
                <span className="italic">Plus… get a FREE VNSH QuickLock with it…</span>
              </span>
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              Then you owe it to yourself to grab this deal now!
            </p>
            <div className="text-center my-8">
              <a
                href={getCheckoutUrl('https://secure.vnsh.com/vns3gsbonus/checkout')}
                className="inline-block"
              >
                <button className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-4 px-8 text-xl md:text-4xl transition-all duration-300 animate-custom-pulse hover:opacity-100 hover:scale-105 whitespace-normal text-center flex items-center justify-center h-[100px] md:h-auto">
                  <span className="inline-block w-full md:whitespace-nowrap">
                    <span className="block md:inline">Give Me My VNSH Holster</span>
                    <span className="block md:inline">+ FREE QuickLock!</span>
                  </span>
                </button>
              </a>
            </div>
            <div className="text-center my-8">
              <p className="text-xl md:text-1xl font-bold leading-normal md:leading-tight text-[#ff0000]">
                <span className="bg-[#ff0] px-2 py-1">
                  60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
                </span>
              </p>
            </div>
            {/* Testimonial Image */}
            <div className="w-full my-8 flex justify-center">
              <div className="w-full max-w-[800px] mx-auto">
                <Image
                  src="/contentimages/vnsh_TestimoniesMobile.webp"
                  alt="Customer testimonials"
                  width={800}
                  height={775}
                  className="rounded-lg w-full h-auto"
                  priority
                  quality={100}
                  unoptimized={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
