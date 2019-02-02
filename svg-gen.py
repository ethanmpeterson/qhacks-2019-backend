import os
import gerber
import sys
from gerber.render import GerberCairoContext


copper = gerber.read('input.GTL') # argument string is the filename

# Rendering context
ctx = GerberCairoContext()

# Create PNG
copper.render(ctx)
ctx.dump(os.path.join(os.path.dirname(__file__), 'output.png'))
#print("Saved")
exit()


