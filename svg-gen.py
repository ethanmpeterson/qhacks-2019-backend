import os
import gerber
from gerber.render import GerberCairoContext

copper = gerber.read('input.GTL')

# Rendering context
ctx = GerberCairoContext()

# Create PNG
copper.render(ctx)
ctx.dump(os.path.join(os.path.dirname(__file__), 'output.png'))
print("Saved")
exit()


