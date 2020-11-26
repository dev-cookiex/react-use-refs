import React from 'react'

const useRefs = <T>( ...refs: readonly React.Ref<T>[] ): React.Ref<T> => {
  return React.useCallback( ( reference: T ) => {
    refs.forEach( ref => {
      if ( typeof ref === 'function' ) ref( reference )
      else if ( ref ) Object.assign( ref, { current: reference } )
    } )
  }, refs )
}

export default useRefs
