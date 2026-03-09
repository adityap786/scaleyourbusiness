-- Execute this carefully in the Supabase SQL editor.
-- Insert existing hardcoded base projects
INSERT INTO public.portfolio_projects (title, slug, subtitle, category, brand_color, brand_bg, cover_image_url, role, timeline, content_markdown, is_featured_on_home)
VALUES 
('Peak Nutrition', 'peak-nutrition', null, 'Health & Fitness', '#D9FA50', 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=800&auto=format&fit=crop', 'Development', '2 Months', '## Case Study...', true),

('Doner & Gyros', 'doner-gyros-india', null, 'F&B Brand', '#FF6B35', 'linear-gradient(135deg, #1a0a00 0%, #2d1810 100%)', 'https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=800&auto=format&fit=crop', 'Design', '1 Month', '## Case Study...', true),

('Just Smile', 'just-smile-catering', 'Catering & Hospitality', 'Hospitality', '#F5C518', 'linear-gradient(135deg, #1a1500 0%, #2d2200 100%)', 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop', 'Full Stack', '3 Months', '## Case Study...', true),

('Eggeto', 'eggeto', 'India''s 1st Instant Omelette', 'E-Commerce', '#FBBF24', 'linear-gradient(135deg, #1c1607 0%, #292011 100%)', 'https://images.unsplash.com/photo-1498837167922-41c53b4f0f67?q=80&w=800&auto=format&fit=crop', 'E-Commerce', '4 Months', '## Case Study...', true),

('BH Hotels', 'bh-hotels', null, 'Hotel & Stays', '#C9A96E', 'linear-gradient(135deg, #0a0a0a 0%, #1a1510 100%)', 'https://images.unsplash.com/photo-1542314831-c6a420325142?q=80&w=800&auto=format&fit=crop', 'Web App', '2 Months', '## Case Study...', true),

('Amrapali AI', 'amrapali-ai-leads', null, 'AI Lead Gen', '#818CF8', 'linear-gradient(135deg, #0f0a1e 0%, #1a1030 100%)', 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800', 'AI Automation', '3 Months', '## Case Study...', true);
