// Frame-accurate re-creation of GalaxyCard's ring/planet + dialog, driven by
// the animations.jsx timeline (t) instead of CSS @keyframes, so video export
// (which steps time frame-by-frame) renders correctly.

function GalaxyCardScene() {
  const t = useTime();

  const spinDeg = (t * 14.4) % 360;      // 360deg / 25s
  const revDeg = (-t * 14.4) % 360;      // counter-rotation

  const hoverScale = interpolate(
    [2.4, 3.2, 10.6, 11.4],
    [1, 1.03, 1.03, 1],
    Easing.easeOutCubic
  )(t);

  const openProgress = interpolate(
    [5.0, 5.4, 9.3, 9.7],
    [0, 1, 1, 0],
    [Easing.easeOutCubic, Easing.linear, Easing.easeInCubic]
  )(t);

  const caption = interpolate(
    [0, 0.3, 2.2, 2.6, 3.0, 4.6, 5.0, 5.4, 9.0, 9.4, 9.8, 10.2, 11.4, 11.8],
    [0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0]
  );

  let captionText = '';
  if (t >= 0.3 && t < 2.6) captionText = 'Idle — ring orbits continuously';
  else if (t >= 3.0 && t < 4.6) captionText = 'Hover — scene lifts + scales';
  else if (t >= 5.4 && t < 9.4) captionText = 'Click — opens product detail';
  else if (t >= 9.8 && t < 11.4) captionText = 'Back to browse';

  const gold = 'rgba(245, 200, 66, 0.7)';
  const title = 'Peacock';
  const script = 'vintage find';
  const desc = '1970s rattan peacock chair, restored cane back. A dramatic seating option for sunrooms.';
  const price = '1,450';
  const image = '../assets/products/product-peacock-chair-02.png';
  const bg = '../assets/patterns/nebula-ochre.webp';
  const dimensions = 'H 58" x W 40" x D 32"';
  const origin = 'Philippines';
  const era = '1970s';
  const imageBg = '#2D2D2D';

  const cardBg = `linear-gradient(160deg, rgba(20,17,12,0.32) 0%, rgba(12,11,8,0.74) 80%), url("${bg}") center/cover no-repeat`;

  const OrbitIcon = ({ size = 16 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ opacity: 0.8 }}>
      <circle cx="12" cy="12" r="3"></circle>
      <circle cx="19" cy="5" r="2"></circle>
      <circle cx="5" cy="19" r="2"></circle>
      <path d="M10.4 21.9a10 10 0 0 0 9.941-15.416"></path>
      <path d="M13.5 2.1a10 10 0 0 0-9.841 15.416"></path>
    </svg>
  );

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background:
        'radial-gradient(ellipse at 25% 25%, rgba(245,200,66,0.10) 0%, transparent 45%),' +
        'radial-gradient(ellipse at 78% 72%, rgba(212,130,42,0.10) 0%, transparent 45%),' +
        'linear-gradient(160deg, #211C14 0%, #16140F 60%, #1A160F 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'relative', width: '360px', height: '520px',
        transform: `scale(${hoverScale})`, transformOrigin: 'center',
        perspective: '1200px', isolation: 'isolate',
      }}>
        <div style={{ width: '100%', height: '100%', transformStyle: 'preserve-3d' }}>

          {/* Ring system */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%', width: '700px', height: '700px',
            transform: 'translate(-50%, -50%)', transformStyle: 'preserve-3d',
            display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none',
          }}>
            <div style={{
              position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
              transform: 'rotateZ(-35deg) rotateX(75deg)', transformStyle: 'preserve-3d',
            }}>
              <div style={{
                position: 'absolute', width: '100%', height: '100%', borderRadius: '50%',
                border: `4px solid ${gold}`,
                boxShadow: '0 0 30px rgba(245,200,66,0.6), inset 0 0 20px rgba(245,200,66,0.4)',
                transformStyle: 'preserve-3d',
                transform: `rotateZ(${spinDeg}deg)`,
              }}>
                <div style={{ position: 'absolute', inset: '10px', borderRadius: '50%',
                  border: '1px solid rgba(245,200,66,0.3)' }}></div>

                <div style={{ position: 'absolute', bottom: 0, left: '50%',
                  transform: 'translate(-50%, 50%)', transformStyle: 'preserve-3d' }}>
                  <div style={{ transformStyle: 'preserve-3d', transform: `rotateZ(${revDeg}deg)` }}>
                    <div style={{
                      width: '28px', height: '28px', borderRadius: '50%',
                      boxShadow: '0 0 15px rgba(163,228,215,0.8), inset 0 0 8px rgba(0,0,0,0.5)',
                      border: '1px solid rgba(207,255,245,0.5)',
                      transform: 'rotateX(-75deg) rotateZ(35deg)',
                      background: 'radial-gradient(circle at 30% 30%, #FFFFFF 0%, #A3E4D7 20%, #2B8271 60%, #0A362E 100%)',
                    }}></div>
                  </div>
                </div>

                <div style={{ position: 'absolute', top: '20%', left: '10%',
                  width: '8px', height: '8px', borderRadius: '50%', background: '#F0E8D8',
                  boxShadow: '0 0 15px #F0E8D8' }}></div>
                <div style={{ position: 'absolute', bottom: '20%', right: '10%',
                  width: '10px', height: '10px', borderRadius: '50%', background: '#F5C842',
                  boxShadow: '0 0 20px #F5C842' }}></div>
                <div style={{ position: 'absolute', top: '40%', right: '5%',
                  width: '6px', height: '6px', borderRadius: '50%', background: '#F0E8D8',
                  boxShadow: '0 0 10px #F0E8D8' }}></div>
              </div>
            </div>
          </div>

          {/* Card body */}
          <div style={{
            position: 'relative', width: '100%', height: '100%', borderRadius: '24px',
            background: cardBg, overflow: 'hidden', display: 'flex', flexDirection: 'column',
            border: '2px solid rgba(245,200,66,0.4)',
            boxShadow: '0 0 40px rgba(0,0,0,0.8), inset 0 0 30px rgba(245,200,66,0.15)',
          }}>
            <div style={{
              height: '260px', width: '94%', margin: '12px auto 0', borderRadius: '20px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
              position: 'relative', boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
              border: '2px solid rgba(245,200,66,0.4)', backgroundColor: imageBg,
            }}>
              <div style={{ position: 'relative', width: '90%', height: '90%', display: 'flex',
                alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
                <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
            </div>

            <div style={{
              flex: 1, padding: '16px 24px 20px', display: 'flex', flexDirection: 'column',
              justifyContent: 'space-between', color: 'var(--bone-white)',
              background: 'linear-gradient(180deg, rgba(14,12,9,0) 0%, rgba(14,12,9,0.42) 55%, rgba(14,12,9,0.72) 100%)',
              position: 'relative', zIndex: 0,
            }}>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: '42px', letterSpacing: '0.01em',
                  color: 'var(--celestial-yellow)', lineHeight: 1, margin: 0,
                  textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                }}>{title}</h3>
                <p style={{
                  fontFamily: 'var(--font-script)', fontSize: '30px', color: 'var(--amber-orange)',
                  margin: '0 0 12px 0', lineHeight: 1.1,
                }}>{script}</p>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--fg-muted)',
                  lineHeight: 1.55, margin: 0, opacity: 0.95,
                  textShadow: '0 1px 6px rgba(0,0,0,0.9)',
                  display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                }}>{desc}</p>
              </div>

              <div style={{ marginTop: '16px' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  background: 'var(--celestial-yellow)', color: '#1E1E1E', padding: '2px 16px',
                  borderRadius: '999px', fontFamily: 'var(--font-display)', fontSize: '20px',
                  boxShadow: '0 0 15px rgba(245,200,66,0.3)',
                }}>
                  ${price}
                  <OrbitIcon size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail dialog */}
      {openProgress > 0.001 && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1000,
          background: `rgba(0,0,0,${0.8 * openProgress})`,
          backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '24px',
        }}>
          <div style={{
            position: 'relative', width: '900px', maxWidth: '90%', maxHeight: '90%',
            overflow: 'hidden', background: 'var(--bg-card-2)', borderRadius: '18px',
            border: '1px solid rgba(245,200,66,0.3)', boxShadow: '0 0 50px rgba(245,200,66,0.12)',
            display: 'flex', flexWrap: 'wrap',
            opacity: openProgress,
            transform: `scale(${0.94 + 0.06 * openProgress})`,
          }}>
            <div style={{
              flex: '1 1 320px', minHeight: '300px', display: 'flex', alignItems: 'center',
              justifyContent: 'center', padding: '32px', backgroundColor: imageBg,
            }}>
              <img src={image} alt={title} style={{
                width: '100%', height: '100%', objectFit: 'contain',
                filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))',
              }} />
            </div>

            <div style={{
              flex: '1 1 320px', padding: '32px', display: 'flex', flexDirection: 'column',
              color: 'var(--bone-white)',
              background: 'linear-gradient(180deg, #242424 0%, #16140F 100%)',
            }}>
              <div style={{ marginBottom: '24px', marginTop: '8px' }}>
                <p style={{ fontFamily: 'var(--font-script)', fontSize: '30px',
                  color: 'var(--amber-orange)', margin: '0 0 8px 0', lineHeight: 1.1 }}>{script}</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '48px',
                  color: 'var(--celestial-yellow)', lineHeight: 1, margin: '0 0 20px 0' }}>{title}</h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--fg-body)',
                  lineHeight: 1.7, margin: 0 }}>
                  {desc}<br /><br />
                  Dimensions: {dimensions}<br />
                  Origin: {origin}<br />
                  Era: {era}
                </p>
              </div>

              <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px', marginBottom: '20px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '36px',
                    color: 'var(--celestial-yellow)' }}>${price}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px',
                    color: 'var(--fg-muted)', marginBottom: '6px' }}>Tax included.</span>
                </div>
                <div style={{
                  width: '100%', background: 'var(--celestial-yellow)', color: '#1E1E1E',
                  fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '15px',
                  letterSpacing: '0.04em', padding: '16px 24px', borderRadius: '999px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                }}>
                  <OrbitIcon size={18} />
                  Add to Cart
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Caption */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: '48px',
        display: 'flex', justifyContent: 'center', pointerEvents: 'none',
      }}>
        <div style={{
          fontFamily: 'var(--font-body), Inter, system-ui, sans-serif',
          fontSize: '20px', letterSpacing: '0.02em', color: 'rgba(240,232,216,0.9)',
          background: 'rgba(0,0,0,0.35)', padding: '10px 22px', borderRadius: '999px',
          opacity: caption(t),
          transition: 'none',
        }}>
          {captionText}
        </div>
      </div>
    </div>
  );
}

window.GalaxyCardScene = GalaxyCardScene;
