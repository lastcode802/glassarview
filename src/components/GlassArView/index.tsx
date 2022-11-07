import { useRef, useEffect, useState } from 'react'

import { JEELIZVTOWIDGET } from 'jeelizvtowidget'

import './index.css'
import ControlButton from '../ControlButton';


export interface GlassArViewProps {
  modelname: string;
  canvaswidth: number;
  canvasheight: number;
  buttonBackgroundColor?: string;
  buttonFontColor?: string;
}

function initWidget(placeHolder: any, canvas: undefined, toggleLoading: { (isLoadingVisible: any): void; bind?: any; }) {
  JEELIZVTOWIDGET.start({
    placeHolder,
    canvas,
    callbacks: {
      ADJUST_START: null,
      ADJUST_END: null,
      LOADING_START: toggleLoading.bind(null, true),
      LOADING_END: toggleLoading.bind(null, false)
    },
    sku: 'empty', // SKU loadded at the beginning
    // image displayed when face is not found:
    // searchImageMask: searchImage, //'https://appstatic.jeeliz.com/jeewidget/images/target.png',
    // searchImageColor: 0xeeeeee, // color of loading (face not found) animation
    // searchImageRotationSpeed: -0.001, // negative -> clockwise
    callbackReady: function () {
      console.log('INFO: JEELIZVTOWIDGET is ready :)');
    },
    onError: function (errorLabel: string) { // this function catches errors, so you can display custom integrated messages
      alert('An error happened. errorLabel =' + errorLabel)
      switch (errorLabel) {
        case 'WEBCAM_UNAVAILABLE':
          // the user has no camera, or does not want to share it.
          break;

        case 'INVALID_SKU':
          // the provided SKU does not match with a glasses model
          break;

        case 'PLACEHOLDER_NULL_WIDTH':
        case 'PLACEHOLDER_NULL_HEIGHT':
          // Something is wrong with the placeholder
          // (element whose id='JeelizVTOWidget')
          break;

        case 'FATAL':
        default:
          // a bit error happens:(
          break;
      } // end switch
    } // end onError()
  }) // end JEELIZVTOWIDGET.start call
}


export function GlassArView(this: any, props: GlassArViewProps) {
  const refPlaceHolder = useRef<any>();
  const refCanvas = useRef<any>();
  const refLoading = useRef<any>();

  const [ismodalName, SetismodalName] = useState('rayban_aviator_or_vertFlash');
  const [isheight, Setisheight] = useState(500);
  const [iswidth, Setwidth] = useState(500);
  const [adjustMode, setAdjustMode] = useState(false);


  const toggleLoading = (isLoadingVisible: any) => {
    refLoading.current.style.display = (isLoadingVisible) ? 'block' : 'none';
  }

  const StartadjustMode = () => {
    JEELIZVTOWIDGET.enter_adjustMode();
    setAdjustMode(true);
  }

  const ExitadjustMode = () => {
    JEELIZVTOWIDGET.exit_adjustMode();
    setAdjustMode(false);
  }

  const SetglassesModel = (sku: any) => {
    JEELIZVTOWIDGET.load(sku);
  }

  useEffect(() => {
    const placeHolder = refPlaceHolder.current;
    const canvas = refCanvas.current;
    initWidget(placeHolder, canvas, toggleLoading);

    return () => {
      JEELIZVTOWIDGET.destroy();
    }
  }, []);

  useEffect(() => {
    SetismodalName(props.modelname);
  }, [props.modelname]);
  useEffect(() => {
    Setisheight(props.canvasheight);
  }, [props.canvasheight]);
  useEffect(() => {
    Setwidth(props.canvaswidth);
  }, [props.canvaswidth]);

  const {
    buttonBackgroundColor,
    buttonFontColor,
  } = props;

  return (
    <div ref={refPlaceHolder} className='JeelizVTOWidget' style={{ height: isheight, width: iswidth }}>
      <canvas ref={refCanvas} className='JeelizVTOWidgetCanvas'></canvas>
      <div className='JeelizVTOWidgetButtonContainer'>
        {
          adjustMode && (
            <div className='JeelizVTOWidgetAdjustNoticeContainer' >
              <div className='JeelizVTOWidgetAdjustNotice'>
                Move the glasses to adjust them.
              </div>
              <div className='JeelizVTOWidgetControls'>
                <ControlButton color={buttonFontColor} backgroundColor={buttonBackgroundColor} onClick={ExitadjustMode}>
                  Quit
                </ControlButton>
              </div>
            </div>
          )
        }
        {
          !adjustMode && (
            <>
            <div className='JeelizVTOWidgetControls'>
              <ControlButton color={buttonFontColor} backgroundColor={buttonBackgroundColor} onClick={StartadjustMode}>
                Adjust
              </ControlButton>
            </div>
             <div className='JeelizVTOWidgetControls JeelizVTOWidgetChangeModelContainer'>
             <ControlButton color={buttonFontColor} backgroundColor={buttonBackgroundColor} onClick={SetglassesModel.bind(this, ismodalName)}>Model </ControlButton>
           </div>
            </>
          )
        }
      </div>

      <div ref={refLoading} className='JeelizVTOWidgetLoading'>
        <div className='JeelizVTOWidgetLoadingText'>
          LOADING...
        </div>
      </div>

    </div>
  )
}

export default GlassArView

