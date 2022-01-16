import  {useEffect} from 'react'
import  Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';


const SmoothScroll = () => {

    const options = {
        damping: 0.01,
        thumbMinSize: 5,
        alwaysShowTracks: false,
        renderByPixels: true,      
    }

    const overscrollOptions = {
        enable: true,
        effect: 'bounce',
        damping: 0.11,
      };

    useEffect(() => {
        Scrollbar.init(document.body, options)
        Scrollbar.use(OverscrollPlugin);

        Scrollbar.init(document.body, {
              plugins: {
                overscroll: {
                  effect: 'bounce'
                }
              }
        });
    }, [])
    return null
}

export default SmoothScroll
