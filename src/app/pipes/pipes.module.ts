import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpTimePipe } from './opTime/op-time.pipe';
import { NumbersToWordsPipe } from './numbersToWords/numbers-to-words.pipe';
import { OrdinalDatePipe } from './ordinalDate/ordinal-date.pipe';


@NgModule({
  declarations: [OpTimePipe, NumbersToWordsPipe, OrdinalDatePipe],
  imports: [
    CommonModule
  ],
  exports: [OpTimePipe, NumbersToWordsPipe, OrdinalDatePipe]
})
export class PipesModule { }
