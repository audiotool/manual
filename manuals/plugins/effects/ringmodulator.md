# Ringmodulator

The Ringmodulator simply multiplies two incoming signals. This creates
linear side-bands in the spectrum that can produce metallic sounding
effects. Note that if one channel is silent the output will be silence
too. This is because a multiplication with zero is always zero. The
boost control allows you to boost the output signal (up to 18db) -
because often the result is far more quiet than before. The
Ringmodulator uses 2x oversampling to reduce aliasing effects.
