import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFinishedQoute, getFinishedQouteSuccess } from '../../../actions/systemsAction';
import { CardCompletedQuotes } from '../../../components/cardcompletedquotes/CardCompletedQuotes';
import { SubNavBarComponent } from '../../../components/layouts/layout1/subnavbar/SubNavBarComponent';

export const ScheduleQuoteFinished = () => {
  const dispatch = useDispatch();
  const [currentPage, setPage] = useState(0);

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - Math.round(scrollTop) === clientHeight) {
      setPage(prev => prev + 1)

    }
  }

  useEffect(() => {
    dispatch(getFinishedQoute(currentPage));
  }, [currentPage]);


  useEffect(() => {
    return () => {
      dispatch(getFinishedQouteSuccess([]));
    }
  }, [])

  return (
    <div className={'quote_finished_c'} >
      <SubNavBarComponent title={'Cotizaciones finalizadas'} historyPage={'/ProgramarCX'} searchActive={true} typeSearch={'FINISHQUOTE_SURGERY'} />
      <div className={'quote_completed_general_c'} >
        <div className="c-quote_completed_allelements" onScroll={handleScroll}>
          <div className={'quote_completed_allelements'}>
            <div className={'cardB'}>
              <CardCompletedQuotes schedule={true}
                view={'programar'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
