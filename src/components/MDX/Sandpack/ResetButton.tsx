/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import * as React from 'react';
import {IconRestart} from '../../Icon/IconRestart';
export interface ResetButtonProps {
  onReset: () => void;
}

export function ResetButton({onReset}: ResetButtonProps) {
  return (
    <button
      className="text-sm text-primary dark:text-primary-dark inline-flex items-center hover:text-link duration-100 ease-in transition mx-1"
      onClick={onReset}
      title="Reiniciar Sandbox"
      type="button">
<<<<<<< HEAD
      <IconRestart className="inline ml-1 mr-1 relative" /> Reiniciar
=======
      <IconRestart className="inline ms-1 me-1 relative" /> Reiniciar
>>>>>>> 819518cfe32dd2db3b765410247c30feea713c77
    </button>
  );
}
